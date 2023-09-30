import React from "react";
import { Field, ProgressBar, TabValue, makeStyles } from "@fluentui/react-components";
import { useConst, useForceUpdate } from "@fluentui/react-hooks"
import { Library, Runtime, Inspector } from "@observablehq/runtime";
import { compile, compileFunc, omd2notebook } from "@hpcc-js/observablehq-compiler";

import "@hpcc-js/observablehq-compiler/dist/index.esm.css";

export const useStyles = makeStyles({
    root: {
    },
});

export interface ObservableProps {
    path: TabValue;
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
        setNotebook({ notebook: undefined });
        fetch(`/fetch?path=${path}`).then(response => {
            return response.text();
        }).then(text => {
            return omd2notebook(text);
        }).then(ohqnb => {
            return compile(ohqnb);
        }).then(compiledNB => {
            setNotebook({ notebook: compiledNB });
        }).catch(e => {
            console.error(e.message);
        });
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
