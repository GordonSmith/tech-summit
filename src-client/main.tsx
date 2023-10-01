import * as React from "react";
import { MoreHorizontalFilled, ChevronCircleRightRegular, VideoClipMultipleRegular, EngineRegular, GridDotsFilled, HomeFilled, BrainCircuitRegular } from "@fluentui/react-icons";
import { Toolbar, ToolbarButton, ToolbarDivider, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, MenuItemLink, Title2, TabList, Tab, makeStyles, ToolbarGroup, shorthands, LargeTitle, makeStaticStyles, Spinner, Link, } from "@fluentui/react-components";
import type { SelectTabData, SelectTabEvent, TabValue, ToolbarProps } from "@fluentui/react-components";
import { GitHubLogoIcon } from "@fluentui/react-icons-mdl2";
import { Observable } from "./observable";

const Placeholder = React.memo(() => (
    <div>
        <LargeTitle>...placeholder...</LargeTitle>
        <br></br>
        <Title2>This site will go live on or before 29 Sept 2023</Title2>
    </div>
));

function removeExtensionAndCapatilize(name: string) {
    return name.replace(/\.[^/.]+$/, "").replace(/^[a-z]/, (c) => c.toUpperCase());
}

function pickIcon(name: string) {
    switch (name.toLowerCase()) {
        case "home":
            return <HomeFilled />;
        case "ai.md":
            return <BrainCircuitRegular />;
        case "runtimes.md":
            return <EngineRegular />;
        case "videos.md":
            return <VideoClipMultipleRegular />;
    }
    return <ChevronCircleRightRegular />;
}

const useStaticStyles = makeStaticStyles({
    body: {
        overflow: "hidden",
        margin: "8px"
    }
});

const useClasses = makeStyles({
    toolbar: {
        justifyContent: "space-between",
    },
    toolbarTitle: {
        verticalAlign: 'middle',
        fontWeight: "bold"
    },
    container: {
        display: "grid",
        gridTemplateColumns: "minmax(min-content, auto) 3fr minmax(min-content, auto)",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateAreas: `
            "header header header"
            "left main right"
            "footer footer footer"
        `,
        height: "calc(100vh - 16px)",
        alignContent: "start"
    },
    header: {
        ...shorthands.gridArea("header")
    },
    left: {
        ...shorthands.gridArea("left")
    },
    main: {
        ...shorthands.gridArea("main"),
        overflowY: "auto",
        marginLeft: "16px",
        marginTop: "16px"
    },
    right: {
        ...shorthands.gridArea("right")
    },
    footer: {
        ...shorthands.gridArea("footer"),
        textAlign: "right"
    }
});

export const Main = (props: Partial<ToolbarProps>) => {

    useStaticStyles();
    const [selectedValue, setSelectedValue] = React.useState<TabValue>("README.md");
    const [tabItems, setTabItems] = React.useState<{ name: string, path: string }[]>([{ name: "home", path: "README.md" }]);
    const [path, setPath] = React.useState<TabValue>("README.md");

    React.useEffect(() => {
        fetch("/list").then(response => {
            if (response.status !== 200) {
                throw new Error("Failed to fetch from GitHub");
            }
            return response.json();
        }).then(json => {
            setTabItems([{ name: "home", path: "README.md" }, ...json]);
        }).catch(e => {
            console.error(e.message);
        });
    }, []);

    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedValue(data.value);
        setPath(data.value);
    };

    const classes = useClasses();

    return <div className={classes.container}>
        <header className={classes.header}>
            <Toolbar aria-label="Default" {...props} className={classes.toolbar}>
                <ToolbarGroup role="presentation" >
                    <ToolbarButton aria-label="Increase Font Size" icon={<GridDotsFilled />} />
                    <ToolbarDivider style={{ display: "inline-flex" }} />
                    <Title2 className={classes.toolbarTitle}>Edge Computing</Title2>
                    {/* <ToolbarDivider style={{ display: "inline-flex" }} /> */}
                </ToolbarGroup>
                <ToolbarGroup role="presentation">
                    <ToolbarButton as="a" href="https://github.com/GordonSmith/tech-summit" target="_blank" icon={<GitHubLogoIcon />} />
                    <ToolbarDivider style={{ display: "inline-flex" }} />
                    <Menu>
                        <MenuTrigger>
                            <ToolbarButton aria-label="More" icon={<MoreHorizontalFilled />} />
                        </MenuTrigger>

                        <MenuPopover >
                            <MenuList>
                                <MenuItemLink href="https://github.com/microsoft/fluentui" target="_blank">FluentUI:  GitHub</MenuItemLink>
                                <MenuItemLink href="https://react.fluentui.dev/?path=/docs/concepts-introduction--page" target="_blank">FluentUI:  Docs</MenuItemLink>
                            </MenuList>
                        </MenuPopover>
                    </Menu>
                </ToolbarGroup>
            </Toolbar>
        </header>
        <nav className={classes.left}>
            <TabList defaultSelectedValue={"README.md"} selectedValue={selectedValue} onTabSelect={onTabSelect} vertical size="large" >
                {
                    tabItems.length === 0 ?
                        <Spinner size="small" labelPosition="below" label="Fetching from GitHub" /> :
                        tabItems.map((item: any) => {
                            return <Tab value={item.path} icon={pickIcon(item.name)}>{removeExtensionAndCapatilize(item.name)}</Tab>;
                        })
                }
            </TabList>
        </nav>
        <main className={classes.main}>
            <div>
                <Observable path={"" + path} />
            </div>
        </main>
        <nav className={classes.right}></nav>
        <div className={classes.footer}><Link href="https://github.com/GordonSmith/tech-summit">https://github.com/GordonSmith/tech-summit</Link></div>
    </div>;
}
