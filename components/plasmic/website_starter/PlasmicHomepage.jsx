// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3Ugs4sV6B8nqCtQp14QqZB
// Component: _-r3Mnvmr7T_
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: 5v8B923TFxOa/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 3Ugs4sV6B8nqCtQp14QqZB/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: _-r3Mnvmr7T_/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Welcome to your first page."}
            </h1>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template\u2014do this from the list of pages in the top toolbar.\n\nOr press the big blue + button to start inserting items into this page.\n\nIntegrate this project into your codebase\u2014press the "
                  }
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Code"}
                </span>
                <React.Fragment>
                  {
                    " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <Button
                data-plasmic-name={"englishBtn"}
                data-plasmic-override={overrides.englishBtn}
                className={classNames("__wab_instance", sty.englishBtn)}
              >
                {"eng"}
              </Button>
              <Button
                data-plasmic-name={"russianBtn"}
                data-plasmic-override={overrides.russianBtn}
                className={classNames("__wab_instance", sty.russianBtn)}
              >
                {"rus"}
              </Button>
            </Stack__>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "h1",
    "text",
    "freeBox",
    "englishBtn",
    "russianBtn"
  ],

  section: ["section", "h1", "text", "freeBox", "englishBtn", "russianBtn"],
  h1: ["h1"],
  text: ["text"],
  freeBox: ["freeBox", "englishBtn", "russianBtn"],
  englishBtn: ["englishBtn"],
  russianBtn: ["russianBtn"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    englishBtn: makeNodeComponent("englishBtn"),
    russianBtn: makeNodeComponent("russianBtn"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
