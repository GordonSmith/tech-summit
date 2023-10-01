import React from "react";
import { Field, ProgressBar, TabValue, makeStyles } from "@fluentui/react-components";
import { useConst, useForceUpdate } from "@fluentui/react-hooks"
import { Library, Runtime, Inspector } from "@observablehq/runtime";
import { compile, compileFunc, ojs2notebook, omd2notebook } from "@hpcc-js/observablehq-compiler";

import "@hpcc-js/observablehq-compiler/dist/index.esm.css";

const notebookCache = new Map<TabValue, compileFunc>();

function fileExtension(path: string) {
    const parts = path.split(".");
    if (parts.length > 1) {
        return parts[parts.length - 1];
    }
    return "";
}

export const useStyles = makeStyles({
    root: {
    },
});

export interface ObservableProps {
    path: string;
}

export const Observable: React.FunctionComponent<ObservableProps> = ({
    path
}) => {
    const placeholder = React.useRef<HTMLDivElement>(null);
    const library = useConst(new Library());
    const runtime = useConst(new Runtime(library));
    const [notebook, setNotebook] = React.useState<{ notebook?: compileFunc }>({ notebook: undefined });
    const forceUpdate = useForceUpdate();

    React.useEffect(() => {
        let cancel = false;
        if (path) {
            if (notebookCache.has(path)) {
                setNotebook({ notebook: notebookCache.get(path) });
            } else {
                setNotebook({ notebook: undefined });
                fetch(`/fetch?path=${path}`).then(response => {
                    switch (fileExtension(path)) {
                        case "ojsnb":
                            return response.json();
                        default:
                            return response.text();
                    }
                }).then(text => {
                    switch (fileExtension(path)) {
                        case "ojsnb":
                            return text;
                        case "ojs":
                            return ojs2notebook(text);
                        case "omd":
                        case "md":
                        default:
                            return omd2notebook(text);
                    }
                }).then(ohqnb => {
                    return compile(ohqnb);
                }).then(compiledNB => {
                    if (cancel === false) {
                        notebookCache.set(path, compiledNB);
                        setNotebook({ notebook: compiledNB });
                    }
                }).catch(e => {
                    console.error(e.message);
                });
            }
        }
        return () => {
            cancel = true;
        };
    }, [path]);

    React.useEffect(() => {
        if (placeholder.current) {
            if (notebook.notebook) {
                placeholder.current.innerHTML = "";
                notebook.notebook(runtime, name => {
                    const div = document.createElement("div");
                    placeholder.current!.appendChild(div);
                    return new Inspector(div);
                });
            }
            forceUpdate();
        }
    }, [notebook]);

    const styles = useStyles();

    return <div>
        {!notebook.notebook &&
            <Field validationMessage={`Fetching ${path}`} validationState="none">
                <ProgressBar thickness="medium" />
            </Field>
        }
        <div ref={placeholder} className={styles.root}>
        </div>
    </div>;
}
