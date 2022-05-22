import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component, f as createEventDispatcher, g as each, h as set_store_value, i as get_store_value, o as onDestroy, m as missing_component } from "../../chunks/index-cba8f918.js";
import "@tiptap/core";
import "@tiptap/starter-kit";
const subscriber_queue = [];
function writable$1(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var Window_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".container.svelte-5tx3wd.svelte-5tx3wd{resize:both;overflow:none;position:absolute;z-index:10;background-color:rgb(195, 195, 194);min-width:300px;min-height:200px;width:500px;border-width:2px;border-style:outset;border-color:rgb(237, 237, 237);display:flex;flex-direction:column}.container.focused.svelte-5tx3wd.svelte-5tx3wd{z-index:100}.container.focused.svelte-5tx3wd .topbar.svelte-5tx3wd{background-color:rgb(3, 0, 128)}.controls.svelte-5tx3wd.svelte-5tx3wd{display:flex;margin-top:5px;margin-bottom:5px}.content.svelte-5tx3wd.svelte-5tx3wd{padding:5px;flex:1;display:flex;flex-direction:column;z-index:2}.topbar.svelte-5tx3wd.svelte-5tx3wd{display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:rgb(128, 128, 128);color:white;font-size:12px;font-family:monospace;height:20px;padding:5px;cursor:move;z-index:3}.close.svelte-5tx3wd.svelte-5tx3wd{font-size:20px;line-height:14px;color:black;border-color:rgb(237, 237, 237);border-width:2px;border-style:outset;background-color:rgb(195, 195, 194);width:14px;height:14px;text-align:center;cursor:pointer}.close.svelte-5tx3wd.svelte-5tx3wd:active{border-style:groove;border-color:rgb(196, 196, 196)}.resizers.svelte-5tx3wd.svelte-5tx3wd{z-index:1;width:100%;height:100%;box-sizing:border-box;position:absolute}.resizers.svelte-5tx3wd .resizer.svelte-5tx3wd{width:15px;height:15px;border-radius:50%;position:absolute}.resizers.svelte-5tx3wd .resizer.top-left.svelte-5tx3wd{left:-5px;top:-5px;cursor:nwse-resize}.resizers.svelte-5tx3wd .resizer.top-right.svelte-5tx3wd{right:-5px;top:-5px;cursor:nesw-resize}.resizers.svelte-5tx3wd .resizer.bottom-left.svelte-5tx3wd{left:-5px;bottom:-5px;cursor:nesw-resize}.resizers.svelte-5tx3wd .resizer.bottom-right.svelte-5tx3wd{right:-5px;bottom:-5px;cursor:nwse-resize}",
  map: null
};
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $focusedApp, $$unsubscribe_focusedApp;
  let $$unsubscribe_openAppsStack;
  $$unsubscribe_focusedApp = subscribe(focusedApp, (value) => $focusedApp = value);
  $$unsubscribe_openAppsStack = subscribe(openAppsStack, (value) => value);
  let { appKey } = $$props;
  let { title } = $$props;
  let { onClose } = $$props;
  let { resizable = false } = $$props;
  let { position = { x: 0, y: 0 } } = $$props;
  let { size = { x: 0, y: 0 } } = $$props;
  let container;
  if ($$props.appKey === void 0 && $$bindings.appKey && appKey !== void 0)
    $$bindings.appKey(appKey);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$c);
  $$unsubscribe_focusedApp();
  $$unsubscribe_openAppsStack();
  return `<div class="${["container svelte-5tx3wd", $focusedApp === appKey ? "focused" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}><div class="${"topbar svelte-5tx3wd"}"><div class="${"title"}">${escape(title)}</div>
		<div class="${"controls svelte-5tx3wd"}"><div class="${"close svelte-5tx3wd"}">\xD7</div></div></div>
	<div class="${"content svelte-5tx3wd"}">${slots.default ? slots.default({}) : ``}</div>

	${resizable ? `<div class="${"resizers svelte-5tx3wd"}"><div class="${"resizer top-left svelte-5tx3wd"}"></div>
			<div class="${"resizer top-right svelte-5tx3wd"}"></div>
			<div class="${"resizer bottom-left svelte-5tx3wd"}"></div>
			<div class="${"resizer bottom-right svelte-5tx3wd"}"></div></div>` : ``}
</div>`;
});
var About_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".pre.svelte-t7q4a3{font-family:Consolas, Courier, monospace}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $apps, $$unsubscribe_apps;
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  $$result.css.add(css$b);
  $$unsubscribe_apps();
  return `${validate_component(Window, "Window").$$render($$result, {
    appKey: "about",
    title: "About",
    onClose: () => $apps["about"].open = false,
    size: { x: 500, y: 300 },
    position: { x: 220, y: 40 },
    resizable: true
  }, {}, {
    default: () => {
      return `<pre class="${"pre svelte-t7q4a3"}">           __             ___  ____
  _______ / /________    / _ \\/ __/
 / __/ -_) __/ __/ _ \\   \\_, /__ \\ 
/_/  \\__/\\__/_/  \\___/  /___/____/ 
</pre>

	<br>
	<div>The virtual operating system for nostalgic people.</div>`;
    }
  })}`;
});
var Button_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".input.svelte-1aki0ju{width:100%;background-color:transparent;border:none}.button.svelte-1aki0ju{color:black;border-color:rgb(237, 237, 237);border-width:2px;border-style:outset;background-color:rgb(195, 195, 194);cursor:pointer;display:flex;justify-content:center;align-items:center;text-align:center}.button.svelte-1aki0ju:active{border-style:groove;border-color:rgb(196, 196, 196)}.button.active.svelte-1aki0ju{border-style:groove;border-color:rgb(196, 196, 196)}.button.svelte-1aki0ju>svg{width:20px}.fullWidth.svelte-1aki0ju{width:100%}.alignLeft.svelte-1aki0ju{text-align:left;justify-content:space-between}.alignCenter.svelte-1aki0ju{text-align:center;justify-content:center}.alignRight.svelte-1aki0ju{text-align:right;justify-content:flex-end}.iconRight.svelte-1aki0ju{align-self:flex-end;justify-self:flex-end;float:right}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fullWidth = false } = $$props;
  let { align = "center" } = $$props;
  let { active = false } = $$props;
  let { textValue = void 0 } = $$props;
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.textValue === void 0 && $$bindings.textValue && textValue !== void 0)
    $$bindings.textValue(textValue);
  $$result.css.add(css$a);
  return `${textValue !== void 0 ? `<button class="${[
    "button svelte-1aki0ju",
    (fullWidth ? "fullWidth" : "") + " " + (align === "left" ? "alignLeft" : "") + " " + (align === "center" ? "alignCenter" : "") + " " + (align === "right" ? "alignRight" : "") + " " + (active ? "active" : "")
  ].join(" ").trim()}"><input type="${"text"}" class="${"input svelte-1aki0ju"}"${add_attribute("value", textValue, 0)}>
		<div class="${"iconRight svelte-1aki0ju"}">${slots.iconRight ? slots.iconRight({}) : ``}</div></button>` : `<button class="${[
    "button svelte-1aki0ju",
    (fullWidth ? "fullWidth" : "") + " " + (align === "left" ? "alignLeft" : "") + " " + (align === "center" ? "alignCenter" : "") + " " + (align === "right" ? "alignRight" : "") + " " + (active ? "active" : "")
  ].join(" ").trim()}"${add_attribute("contenteditable", textValue !== void 0, 0)}>${slots.default ? slots.default({}) : ``}
		<div class="${"iconRight svelte-1aki0ju"}">${slots.iconRight ? slots.iconRight({}) : ``}</div></button>`}`;
});
const ForwardStepIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}"><path d="${"M287.1 447.1c17.67 0 31.1-14.33 31.1-32V96.03c0-17.67-14.33-32-32-32c-17.67 0-31.1 14.33-31.1 31.1v319.9C255.1 433.6 270.3 447.1 287.1 447.1zM52.51 440.6l192-159.1c7.625-6.436 11.43-15.53 11.43-24.62c0-9.094-3.809-18.18-11.43-24.62l-192-159.1C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6z"}"></path></svg>`;
});
const PauseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}"><path d="${"M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"}"></path></svg>`;
});
const PlayIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384 512"}"><path d="${"M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"}"></path></svg>`;
});
const PreviousStepIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}"><path d="${"M31.1 64.03c-17.67 0-31.1 14.33-31.1 32v319.9c0 17.67 14.33 32 32 32C49.67 447.1 64 433.6 64 415.1V96.03C64 78.36 49.67 64.03 31.1 64.03zM267.5 71.41l-192 159.1C67.82 237.8 64 246.9 64 256c0 9.094 3.82 18.18 11.44 24.62l192 159.1c20.63 17.12 52.51 2.75 52.51-24.62v-319.9C319.1 68.66 288.1 54.28 267.5 71.41z"}"></path></svg>`;
});
var Range_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".range.svelte-1nvu8p6.svelte-1nvu8p6{position:relative;flex:1;display:flex;justify-content:center;align-items:center}.range__wrapper.svelte-1nvu8p6.svelte-1nvu8p6{min-width:100%;position:relative;padding:4px 0;box-sizing:border-box;outline:none;height:24px}.range__wrapper.svelte-1nvu8p6:focus-visible>.range__track.svelte-1nvu8p6{box-shadow:0 0 0 2px white, 0 0 0 3px var(--track-focus, #6185ff)}.range__track.svelte-1nvu8p6.svelte-1nvu8p6{height:16px;background-color:black}.range__track--highlighted.svelte-1nvu8p6.svelte-1nvu8p6{height:16px;background:linear-gradient(90deg, rgb(69, 206, 76), rgb(38, 156, 71));width:0;position:absolute}.range__thumb.svelte-1nvu8p6.svelte-1nvu8p6{display:flex;align-items:center;justify-content:center;position:absolute;width:10px;height:20px;border-color:rgb(237, 237, 237);border-width:2px;border-style:outset;background-color:rgb(195, 195, 194);cursor:pointer;margin-top:-5px;transition:box-shadow 100ms;user-select:none;box-shadow:var(\n			--thumb-boxshadow,\n			0 1px 1px 0 rgba(0, 0, 0, 0.14),\n			0 0px 2px 1px rgba(0, 0, 0, 0.2)\n		)}.range__thumb--holding.svelte-1nvu8p6.svelte-1nvu8p6{box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 1px rgba(0, 0, 0, 0.2),\n			0 0 0 6px var(--thumb-holding-outline, rgba(113, 119, 250, 0.3))}.range__tooltip.svelte-1nvu8p6.svelte-1nvu8p6{pointer-events:none;position:absolute;top:-45px;color:var(--tooltip-text, white);width:38px;padding:5px;border-radius:2px;text-align:center;border-color:rgb(237, 237, 237);border-width:2px;border-style:outset;background-color:rgb(195, 195, 194);color:black}.range__tooltip.svelte-1nvu8p6.svelte-1nvu8p6::after{content:'';display:block;position:absolute;height:7px;width:7px;border-color:rgb(237, 237, 237);border-width:2px;border-style:outset;background-color:rgb(195, 195, 194);bottom:-5px;left:calc(50% - 3px);clip-path:polygon(0% 0%, 100% 100%, 0% 100%);transform:rotate(-45deg);border-radius:0 0 0 3px}",
  map: null
};
const Range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { initialValue = 0 } = $$props;
  let { value = initialValue } = $$props;
  let { valueFormatted = void 0 } = $$props;
  let container;
  let thumb;
  let progressBar;
  let element;
  let currentThumb;
  let holding = false;
  let thumbHover = false;
  createEventDispatcher();
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.initialValue === void 0 && $$bindings.initialValue && initialValue !== void 0)
    $$bindings.initialValue(initialValue);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueFormatted === void 0 && $$bindings.valueFormatted && valueFormatted !== void 0)
    $$bindings.valueFormatted(valueFormatted);
  $$result.css.add(css$9);
  {
    value = initialValue;
  }
  holding = Boolean(currentThumb);
  return `
<div class="${"range svelte-1nvu8p6"}"><div class="${"range__wrapper svelte-1nvu8p6"}" tabindex="${"0"}" role="${"slider"}"${add_attribute("aria-valuemin", min, 0)}${add_attribute("aria-valuemax", max, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("this", element, 0)}><div class="${"range__track svelte-1nvu8p6"}"${add_attribute("this", container, 0)}><div class="${"range__track--highlighted svelte-1nvu8p6"}"${add_attribute("this", progressBar, 0)}></div>
			
			<div class="${["range__thumb svelte-1nvu8p6", holding ? "range__thumb--holding" : ""].join(" ").trim()}"${add_attribute("this", thumb, 0)}>${holding || thumbHover ? `<div class="${"range__tooltip svelte-1nvu8p6"}">${escape(valueFormatted || value)}</div>` : ``}</div></div></div></div>

${$$result.head += `<style data-svelte="svelte-1k1epb4">.mouse-over-shield {
			position: fixed;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			background-color: rgba(255, 0, 0, 0);
			z-index: 10000;
			cursor: grabbing;
		}
	</style>`, ""}`;
});
const chopinPlaylist = {
  name: "Chopin",
  tracks: [
    { id: "sSeviT0uwLE", title: "Chopin Rondo Op.1 (Ashkenazy)" },
    {
      id: "RsFo6Ms1WAc",
      title: "Variations on 'La ci darem la mano' Mozart's Don Giovanni Op 2 in Bb - Chopin"
    },
    {
      id: "0MDiqS63b94",
      title: "Chopin - Yo-Yo Ma Performs Introduction and Polonaise brillante in C major, Op. 3 with Sheet Music"
    },
    { id: "vL-NDDI4BfE", title: "Fr\xE9d\xE9ric Chopin - Piano Sonata No. 1" },
    { id: "Utkd2A8zGkw", title: "Chopin Rondo Op.5 in F major" },
    { id: "yK07kKSMQC0", title: "Chopin Mazurka Op.6 No.1 By Arthur Rubinstein (20/154)" },
    { id: "AGMxPSvQvwM", title: "Chopin Mazurka Op.6 No.2 By Arthur Rubinstein (21/154)" },
    { id: "6IOm4ifCLYU", title: "Chopin Mazurka Op.6 No.3 By Arthur Rubinstein (22/154)" },
    { id: "FWuHxw9JLb0", title: "Chopin Mazurka Op.6 No.4 By Arthur Rubinstein (23/154)" },
    { id: "JUHmr7ZCSoI", title: "Chopin Mazurka Op.7 No.1 By Arthur Rubinstein (24/154)" },
    { id: "hvqFOEPgJQU", title: "Chopin Mazurka Op.7 No.2 By Arthur Rubinstein (25/154)" },
    { id: "TQ14CF-FzWU", title: "Chopin Mazurka Op.7 No.3 By Arthur Rubinstein (26/154)" },
    { id: "gDcjEqZwpqY", title: "Chopin Mazurka Op.7 No.4 By Arthur Rubinstein (27/154)" },
    { id: "Mze_Qy-eFoI", title: "Chopin Mazurka Op.7 No.5 By Arthur Rubinstein (28/154)" },
    {
      id: "R6gAz8c8A6w",
      title: "Chopin / W\u0142adys\u0142aw Szpilman, 1950s: Trio in G minor, Op. 8 - Complete"
    },
    { id: "ZtIW2r1EalM", title: "F. Chopin : Nocturne op. 9 no. 1 in B flat minor (Rubinstein)" },
    { id: "YGRO05WcNDk", title: "Chopin Nocturne Op.9 No.2 (Arthur Rubinstein)" },
    { id: "O3Apq41rrFc", title: "Chopin Nocturne Op. 9 No. 3 in B Major (Arthur Rubinstein)" },
    { id: "Q8IHzqVKugE", title: "Valentina Lisitsa : Chopin Etudes N\xBA1-N\xBA12, Op\u202410" },
    { id: "m7Sxe1y0U7M", title: "Ashkenazy plays Chopin Variations Brillantes, Op.12" },
    { id: "5_tsewEETfs", title: "F. Chopin - Fantasia on Polish Airs, Op.13 (1/2)" },
    { id: "fNiFyY5wKsU", title: "F. Chopin - Fantasia on Polish Airs, Op.13 (2/2)" },
    { id: "OEXimFK0bU8", title: "Chopin - Rondo \xE0 la Krakowiak, Op. 14" },
    { id: "lin5uA0LSaM", title: "Chopin Nocturne Op. 15 No. 1 in F Major (Arthur Rubinstein)" },
    { id: "pTfeTJME7-I", title: "Chopin Nocturne Op. 15 No. 3 in G minor (Arthur Rubinstein)" },
    {
      id: "3KT6yzSMeH8",
      title: "Fei-Fei Dong - Chopin Rondo Op.16 at Chopin Piano Competition 2010"
    },
    { id: "tmWTqkYQQbs", title: "Chopin - Four Mazurkas, Opus 17" },
    { id: "3F1ny5bgeNk", title: "CHOPIN Bolero - Vladimir Ashkenazy" },
    { id: "38VShqkukWY", title: "Chopin: Scherzo Op.20 No.1 in B minor" },
    {
      id: "jJ130s7BiSM",
      title: "Chopin: Andante Spianato and Grande Polonaise Brillante Op.22 (Weissenberg)"
    },
    { id: "eG1Olvh7vCU", title: "Chopin Ballade No.1 Op.23 (Horowitz)" },
    { id: "OCP9lKX-Tf8", title: "Chopin - Four Mazurkas, Op. 24" },
    { id: "PDREyurtWQo", title: "Sokolov - Chopin Etudes op.25.wmv" },
    {
      id: "Nedn2E5g2cM",
      title: "Hamelin plays Chopin - Polonaise op. 26 No. 1 Audio + Sheet music"
    },
    { id: "ZQXY0S3X1lM", title: "Kissin plays Chopin Polonaise,op.26 no.2 in E flat Minor" },
    { id: "QAcAWWU_0mE", title: "Chopin Nocturne Op.27 No.1 (Arthur Rubinstein)" },
    { id: "WJ8RVjm49hE", title: "Chopin - Nocturne Op. 27 No. 2 (Rubinstein)" },
    { id: "bnXMX31ApWQ", title: "Pollini Chopin 24 Preludes 1974 Live" },
    { id: "brhFfIWjBQk", title: "Ashkenazy plays Chopin Impromptus - No.1 in A flat Major, Op.29" },
    { id: "_1uZ_CLJup4", title: "Chopin Mazurka Op.30 No.1 By Arthur Rubinstein (37/154)" },
    { id: "53H5qz-BhTE", title: "Chopin Mazurka Op.30 No.2 By Arthur Rubinstein (38/154)" },
    { id: "aCDat0G8Pwc", title: "Chopin Mazurka Op.30 No.3 By Arthur Rubinstein (39/154)" },
    { id: "d6TUNjMIr8A", title: "Chopin Mazurka Op.30 No.4 By Arthur Rubinstein (40/154)" },
    { id: "z_MwPdr7WXQ", title: "Chopin - Scherzo No. 2, Op. 31 (Rubinstein)" },
    { id: "BhIP4hDBp-E", title: "Chopin Nocturne Op. 32 No. 1 in B Major (Arthur Rubinstein)" },
    { id: "my5OSmQZjns", title: "Chopin Nocturne Op. 32 No. 2 in A-flat Major" },
    { id: "yweyB8lI7kY", title: "Live Pollini Chopin Mazurkas op.33 (2008)" },
    {
      id: "19JJfIJyl5M",
      title: 'Arthur Rubinstein - Chopin "Valse brillante" Op. 34 No. 1 in A-Flat'
    },
    {
      id: "PGdpRmL2XUc",
      title: 'Arthur Rubinstein - Chopin "Valse brillante" Op. 34 No. 2 in A Minor'
    },
    { id: "2Dz-K8iPN6w", title: "Stanislav Bunin \u2013 Waltz in F major, Op. 34 No. 3 (1985)" },
    {
      id: "xIClh5e_1g4",
      title: "[Wilhelm Backhaus] Chopin: Piano Sonata No.2 in B-flat minor Op.35"
    },
    {
      id: "DpcBEpiLDWA",
      title: "Ashkenazy plays Chopin Impromptus - No.2 in F sharp Major, Op.36"
    },
    { id: "LNhbc87JBro", title: "Chopin Nocturne Op.37 No.2 By Arthur Rubinstein (12/154)" },
    { id: "Wslm1ZL9EI8", title: "Krystian Zimerman - Chopin - Ballade No. 2 in F major, Op. 38" },
    { id: "NPm_V5lJoao", title: "RAFAEL OROZCO, Scherzo no. 3 opus 39 Fr\xE9d\xE9ric Chopin" },
    {
      id: "s9hgw0VJO2Q",
      title: 'Chopin - Polonaise in A major, Op. 40, No. 1, "Military" (Ashkenazy)'
    },
    { id: "vYbd5_YywCM", title: "Arthur Rubinstein - Chopin Polonaise in C Minor, Op. 40 No. 2" },
    { id: "J9ivOk3aDQI", title: "Vladimir Ashkenazy plays Chopin Mazurkas Op.41" },
    { id: "bdZg7rHdrPA", title: "(HQ) Chopin Waltz A flat major Op. 42 (Zoltan Kocsis)" },
    { id: "6q8Ku0vItm0", title: "Fr\xE9d\xE9ric Chopin - Tarantella Op. 43 (audio + sheet music)" },
    { id: "ehm_kDU563Q", title: "Chopin: Polonaise in f sharp minor Op. 44 (P\xF6ntinen)" },
    { id: "uCpi9COuaUA", title: "Fr\xE9d\xE9ric Chopin \u2012 Prelude in C-sharp minor, Op.45" },
    { id: "SU73S7WCAZM", title: "Chopin Allegro de concert, Op. 46" },
    { id: "107Iwx5RKSM", title: "Chopin: Nocturne Op.48 No.1 in C Minor (Ashkenazy)" },
    { id: "O5X4XDrsOlI", title: "Chopin Nocturne Op.48 No.2 By Arthur Rubinstein (14/154)" },
    {
      id: "atW032kzhJI",
      title: "Arturo Benedetti Michelangeli plays Chopin Fantasia Op. 49 Audio and Sheet music"
    },
    { id: "h0BjbU9upFI", title: "Vladimir Ashkenazy plays Chopin Mazurkas Op.50" },
    { id: "4Qw9dwmyths", title: "Ashkenazy plays Chopin Impromptus - No.3 in G flat Major, Op.51" },
    { id: "7tmQSWuYwrI", title: "Chopin - Ballade No. 4, Op. 52 (Rubinstein)" },
    { id: "8QT7ITv9Ecs", title: "Chopin - Polonaise, Op. 53 (Kissin)" },
    {
      id: "kgMbI77oAcg",
      title: "Irene Veneziano - Chopin Scherzo No.4 Op.54 at Chopin Piano Competition 2010"
    },
    { id: "e3yrEEM5j_s", title: "Chopin Nocturne Op.55 No.1 By Arthur Rubinstein (15/154)" },
    { id: "TbPDxbUp0_g", title: "Chopin Nocturne Op.55 No.2 By Arthur Rubinstein (16/154)" },
    {
      id: "tDJNeXJGj3Q",
      title: "Daniil Trifonov - Chopin Mazurkas Op.56 at Chopin Piano Competition 2010"
    },
    { id: "kSjv-Flk51o", title: "Aldo Ciccolini: Mazurche op.59 (Chopin)" },
    { id: "FFDS3CIdoIw", title: "Ashkenazy plays Chopin Barcarolle Op.60" },
    { id: "1FeogxNAJWY", title: "Chopin Nocturne Op.62 No.1 By Arthur Rubinstein (17/154)" },
    { id: "LRZjjQxGaYQ", title: "Chopin Nocturne Op.62 No.2 By Arthur Rubinstein (18/154)" },
    { id: "NILZKHpdNTc", title: "Arthur Rubinstein - Chopin Mazurka, Op. 63 No. 1" },
    { id: "AcUYS03fnNQ", title: "Arthur Rubinstein - Chopin Mazurka, Op. 63 No. 2" },
    { id: "sQJS8OTwYKM", title: "Arthur Rubinstein - Chopin Mazurka, Op. 63 No. 3" },
    { id: "hOcryGEw1NY", title: "Chopin - Waltz Op. 64 No. 2 (Rubinstein)" },
    { id: "hOcryGEw1NY", title: "Chopin - Waltz Op. 64 No. 2 (Rubinstein)" },
    { id: "Dmzx7Psjm0M", title: "Arthur Rubinstein - Chopin Waltz Op. 64 No. 3 in A Flat" },
    {
      id: "qAaGrczZ2h0",
      title: "Chopin - Yo-Yo Ma Performs Sonata for Cello & Piano in G minor, Op. 65 Complete with Sheet Music"
    },
    { id: "75x6DncZDgI", title: "Chopin - Fantaisie Impromptu, Op. 66 (Rubinstein)" },
    { id: "JfDr54x3HeY", title: "Fr\xE9d\xE9ric Chopin - Mazurkas op. 67 | Alexej Outekhin" },
    {
      id: "mWvmFU6dRgw",
      title: "Vladimir Sofronitsky plays Chopin Mazurka Op.68 (No.1, No.2, No.3, No.4)"
    },
    {
      id: "hlzF_jLZOL4",
      title: `Arthur Rubinstein - Chopin Waltz "L'Adieu" Op. 69 No. 1 in A Flat , Posth.`
    },
    { id: "VOhr9DH0L3M", title: "Arthur Rubinstein - Chopin Waltz Op. 69 No. 2 in B minor" },
    { id: "rI1NA2ECOww", title: "Arthur Rubinstein - Chopin Waltz Op. 70 No. 1 in G flat" },
    { id: "euLyQCJmCfs", title: "Arthur Rubinstein - Chopin Waltz Op. 70 No. 2 in F minor" },
    { id: "_lmJ1Dywe1w", title: "Arthur Rubinstein - Chopin Waltz Op. 70 No. 3 in D Flat" },
    { id: "r7-F6km3uGI", title: "Chopin - Polonesa en re menor Op 71 N\xBA 1" },
    { id: "C8k0-iTm1bY", title: "Chopin - Polonesa en si bemol mayor Op 71 N\xBA 2" },
    { id: "W1rwAfzpa04", title: "Chopin - Polonesa en fa menor Op 71 N\xBA 3" },
    { id: "h5_V-d8HjhU", title: "Chopin Nocturne Op.72 No.1 By Arthur Rubinstein (19/154)" },
    { id: "f32VdR_4HuY", title: "Fr\xE9d\xE9ric Chopin - Marche Fun\xE8bre , Op.72 No.2" },
    { id: "HIf94_B5j3w", title: "Ashkenazy plays Chopin \xC9cossaises Op.posth.72 No.3 (BI 12)" },
    { id: "6AVRjczZths", title: "Chopin Rondo in C major for 2 Pianos Op.73" },
    { id: "sBo_jb4UfkU", title: "Chopin - 17 Polish Songs, Opus 74" },
    { id: "8qwwX5FYFdg", title: 'CHOPIN CHANT POLONAIS OP74 "PRINTEMPS" GIOVANNI BELLUCCI, PIANO' },
    { id: "fvowvhjWrrY", title: "Frederic Chopin, Polonaise in g minor, Op Posth" },
    { id: "atAX70Vfji8", title: "Frederic Chopin: Mazurka No. 56 in Bb Major (Opus Posthumous)" },
    { id: "fUG94Q80yfU", title: "Grand Duo Concertant in E major on Theme from Robert le Diable" },
    { id: "p8VYuv8ngD0", title: "Vladimir Ashkenazy: Hexam\xE9ron Variation No. 6 (Chopin)" },
    { id: "QPpPURAMkQk", title: "Fr\xE9d\xE9ric Chopin - Trois nouvelles etudes (audio + sheet music)" },
    {
      id: "niIakcA4Gvg",
      title: "Ashkenazy plays Chopin Mazurka No.50 in A minor, Op.posth.S2 No.4 (BI 134) (Notre Temps)"
    },
    {
      id: "Sgkzdp-N7NY",
      title: "Ashkenazy plays Chopin Mazurka No.51 in A minor, Op.posth.S2 No.5 (BI 140) (\xE0 \xC9mile Gaillard)"
    },
    {
      id: "90jYll4rXrQ",
      title: 'Chopin / Barbara Hesse-Bukowska, 1958: "Variations Pour Piano Sur Un Air Allemand" in E Major (1824)'
    },
    { id: "sq439EqJnIo", title: "Variations On a Theme Of Moore Op P1 No 6 In D (BI12a)" },
    { id: "r_fzkNPjuQs", title: "Frederic Chopin: Mazurka No. 54 in D Major (Opus Posthumous)" },
    { id: "w3pCOjowOQI", title: 'Chopin Song "Mazur-Jakie\u017C kwiaty" Op.Posth.' },
    { id: "0kGwRulsURI", title: "Hamelin plays Chopin - Souvenir de Paganini Audio + Sheet music" },
    { id: "SvbjpmW96OE", title: "Chopin - The Waltzes - No. 15 in E Major" },
    { id: "X-1eLqKQoHg", title: "Ashkenazy, Chopin The Waltz No.16 in A flat major, Op.posth." },
    {
      id: "Aau5TagG7Ew",
      title: "Michelangeli plays Chopin Waltz No.17 in E flat major Op.Posth ."
    },
    { id: "AauGBCVDMn0", title: "Arthur Rubinstein - Chopin Waltz In E Minor" },
    {
      id: "o5odrgVQcmU",
      title: "Arrau plays Chopin Nocturne in C sharp minor (Lento con gran espressione)"
    },
    { id: "65LrGqj9rcw", title: "William Kapell: Mazurka in B flat major, Op. post. (Chopin)" },
    { id: "eCy0_g0Nob8", title: "Chopin Mazurka No.55(54) in D major Op.posth." },
    {
      id: "vtTKwv6WBCI",
      title: "Luchian plays Chopin Mazurka A flat major Op.posth.P2 No.4 (BI 85) (Szymanowska)"
    },
    { id: "Tue4QVbPe8s", title: "F. CHOPIN \u2013 Largo in E Flat Major. V. Askenazy, piano" },
    { id: "qyZfhkyx44c", title: "Chopin - Cantabile in B-flat major - Andreas Fr\xF6lich" },
    { id: "UfVzdKviZDs", title: "Frederic Chopin: Prelude in Ab major, Opus posthumous" },
    { id: "xIqx0MOsNfo", title: "Chopin - Nocturne No.21 in C-Minor Op.Posth" },
    {
      id: "bJZvkH4PlP0",
      title: "Frederic Chopin - Dumka for voice and piano (audio + sheet music)"
    },
    { id: "CXAiBROIBVQ", title: "Chopin Walc Es-dur (Sostenuto) [op. posth.]" },
    {
      id: "mZJt-oWDD7U",
      title: "Ashkenazy plays Chopin Waltz No.19 in A minor, Op.posth.P2 No.11 (BI 150)"
    },
    { id: "CdysGJpASyY", title: "F. CHOPIN - Album Leaf in E Major. J. Kropfitsch, piano" },
    { id: "HURsBY02mzs", title: "Chopin - Galop Marquis Op Postumo (Paginas de Album)" },
    { id: "8x5PeQ9jljc", title: "Chopin - Unfinished Canon in F minor, B 129a" },
    { id: "D0RrT6hMOgI", title: "Ashkenazy plays Chopin Fugue in A minor, Op.posth.P3 No.2" },
    { id: "sfllTcM7JqE", title: "F. CHOPIN - 2 Bourr\xE9es B. 160a. J. Kropfitsch, piano" },
    { id: "59kEKklvn4c", title: "Mazurka in D major, B. 4" },
    { id: "rJiRMc4EK5o", title: "Fr\xE9d\xE9ric Chopin - Contredanse in Gb Major" },
    { id: "jWg9Z9xKks8", title: "Fr\xE9d\xE9ric Chopin Variations for Flute and Piano in E major, B.9" },
    {
      id: "SXNRRJ2nRsw",
      title: "Chopin - Valse Melancolique in F-sharp Minor, No. 20 (Op. Posth.)"
    },
    { id: "c0yhYQFIIeg9", title: "Chopin, Allegretto Fis Dur, Wolfgang Weller 2016." }
  ]
};
const playlists = {
  chopin: chopinPlaylist
};
function formatSeconds(input) {
  const minutes = Math.floor(input / 60);
  const seconds = input % 60;
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  return result;
}
var TrackList_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".tracklist.svelte-1u6k0am{height:300px;overflow-y:auto;background-color:white;padding:5px;flex:1}.track.svelte-1u6k0am{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;padding:3px 5px;user-select:none}.track.svelte-1u6k0am:hover{background-color:rgb(240, 240, 240)}.active.svelte-1u6k0am{background-color:rgb(3, 0, 128);color:white}.active.svelte-1u6k0am:hover{background-color:rgb(3, 0, 128);color:white}",
  map: null
};
const TrackList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tracks = [] } = $$props;
  let { currentIndex = void 0 } = $$props;
  let { onSelectTrack } = $$props;
  if ($$props.tracks === void 0 && $$bindings.tracks && tracks !== void 0)
    $$bindings.tracks(tracks);
  if ($$props.currentIndex === void 0 && $$bindings.currentIndex && currentIndex !== void 0)
    $$bindings.currentIndex(currentIndex);
  if ($$props.onSelectTrack === void 0 && $$bindings.onSelectTrack && onSelectTrack !== void 0)
    $$bindings.onSelectTrack(onSelectTrack);
  $$result.css.add(css$8);
  return `<div class="${"tracklist svelte-1u6k0am"}">${each(tracks, (track, index) => {
    return `<div class="${["track svelte-1u6k0am", currentIndex === index ? "active" : ""].join(" ").trim()}"><div class="${"title"}"${add_attribute("title", track.title, 0)}>${escape(track.title)}</div>
		</div>`;
  })}
</div>`;
});
var AudioPlayer_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".controls.svelte-13bu0l9{display:flex;margin-top:5px;margin-bottom:5px}.playback.svelte-13bu0l9{background-color:black;color:rgb(68, 208, 68);width:100%;padding:10px;box-sizing:border-box;font-size:20px;font-family:monospace}.progress.svelte-13bu0l9{font-size:30px}.info.svelte-13bu0l9{font-size:16px}.track-title.svelte-13bu0l9{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
  map: null
};
const AudioPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progressFormatted;
  let durationFormatted;
  let $apps, $$unsubscribe_apps;
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  let myPlayer;
  let activePlaylist = playlists.chopin;
  let progress = 0;
  let duration = 0;
  let videoData;
  let playlist = [];
  let currentIndex = 0;
  function onClose() {
    set_store_value(apps, $apps["music"].open = false, $apps);
  }
  $$result.css.add(css$7);
  progressFormatted = formatSeconds(progress);
  durationFormatted = formatSeconds(duration);
  $$unsubscribe_apps();
  return `${validate_component(Window, "Window").$$render($$result, {
    appKey: "music",
    title: "Music player",
    onClose,
    position: { x: 200, y: 10 },
    size: { x: 500, y: 490 }
  }, {}, {
    default: () => {
      return `<div class="${"playback svelte-13bu0l9"}"><div class="${"progress svelte-13bu0l9"}">${escape(progressFormatted)}/${escape(durationFormatted)}</div>
		<div class="${"info svelte-13bu0l9"}">${(videoData == null ? void 0 : videoData.title) ? `<div>Track ${escape(currentIndex + 1)} / ${escape(playlist.length)}</div>
				<div class="${"track-title svelte-13bu0l9"}">${escape(videoData.title)}</div>` : `Loading...`}</div></div>

	<div class="${"controls svelte-13bu0l9"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PlayIcon, "PlayIcon").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PauseIcon, "PauseIcon").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PreviousStepIcon, "PreviousStepIcon").$$render($$result, {}, {}, {})}`;
        }
      })}
		${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ForwardStepIcon, "ForwardStepIcon").$$render($$result, {}, {}, {})}`;
        }
      })}
		<div style="${"width:10px"}"></div>
		${validate_component(Range, "Range").$$render($$result, {
        valueFormatted: progressFormatted,
        initialValue: progress,
        max: duration
      }, {}, {})}</div>

	<div>${validate_component(TrackList, "TrackList").$$render($$result, {
        tracks: activePlaylist.tracks,
        currentIndex,
        onSelectTrack: (index) => myPlayer.playVideoAt(index)
      }, {}, {})}</div>`;
    }
  })}`;
});
const Literal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $apps, $$unsubscribe_apps;
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  $$unsubscribe_apps();
  return `${validate_component(Window, "Window").$$render($$result, {
    appKey: "literal",
    title: "Literal.club",
    onClose: () => $apps["literal"].open = false,
    size: { x: 900, y: 700 },
    position: { x: 220, y: 40 }
  }, {}, {
    default: () => {
      return `<iframe src="${"https://literal.club"}" frameborder="${"0"}" title="${"Literal"}"></iframe>`;
    }
  })}`;
});
var Rain_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".rainWrapper.svelte-ok7ims{height:290px;position:relative;overflow:hidden;pointer-events:none}#rainPlayer.svelte-ok7ims{position:absolute;top:-60px}",
  map: null
};
const Rain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $apps, $$unsubscribe_apps;
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  $$result.css.add(css$6);
  $$unsubscribe_apps();
  return `${validate_component(Window, "Window").$$render($$result, {
    appKey: "rain",
    title: "Rain",
    onClose: () => $apps["rain"].open = false,
    size: { x: 640, y: 330 },
    resizable: false
  }, {}, {
    default: () => {
      return `<div class="${"rainWrapper svelte-ok7ims"}"><div id="${"rainPlayer"}" class="${"svelte-ok7ims"}"></div></div>`;
    }
  })}`;
});
var stores = {};
function writable(key, initialValue) {
  const browser = typeof localStorage != "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    localStorage.setItem(key2, JSON.stringify(value));
  }
  if (!stores[key]) {
    const store = writable$1(initialValue, (set2) => {
      const json = browser ? localStorage.getItem(key) : null;
      if (json) {
        set2(JSON.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? JSON.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
const notepad = writable("notepad", [{ name: "File 1", body: {} }]);
var Notepad_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".wrap.svelte-1oz9jst{display:flex;flex:1;overflow-y:auto}.textarea.svelte-1oz9jst{height:100%;resize:none}.left.svelte-1oz9jst{flex:1;height:100%}.right.svelte-1oz9jst{width:140px;height:100%}.ProseMirror{height:100%;padding:5px 10px;background:white;box-sizing:border-box;border-radius:0}.ProseMirror-focused{outline:none}",
  map: null
};
const Notepad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notepad, $$unsubscribe_notepad;
  let $apps, $$unsubscribe_apps;
  $$unsubscribe_notepad = subscribe(notepad, (value) => $notepad = value);
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  let element;
  let activeTab = 0;
  onDestroy(() => {
  });
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Window, "Window").$$render($$result, {
      appKey: "notepad",
      title: "Notepad",
      onClose: () => $apps["notepad"].open = false,
      size: { x: 500, y: 300 },
      position: { x: 220, y: 40 },
      resizable: true
    }, {}, {
      default: () => {
        return `<div class="${"wrap svelte-1oz9jst"}"><div class="${"left svelte-1oz9jst"}"><div class="${"textarea svelte-1oz9jst"}"${add_attribute("this", element, 0)}></div></div>
		<div class="${"right svelte-1oz9jst"}">${each($notepad, (tab, i) => {
          return `${validate_component(Button, "Button").$$render($$result, {
            fullWidth: true,
            align: "left",
            active: activeTab === i,
            textValue: tab.name
          }, {
            textValue: ($$value) => {
              tab.name = $$value;
              $$settled = false;
            }
          }, {
            iconRight: () => {
              return `<div slot="${"iconRight"}">\xD7</div>`;
            },
            default: () => {
              return `${escape(tab.name)}
					
				`;
            }
          })}`;
        })}
			${validate_component(Button, "Button").$$render($$result, { fullWidth: true, align: "left" }, {}, {
          default: () => {
            return `+ New tab
			`;
          }
        })}</div></div>
	`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_notepad();
  $$unsubscribe_apps();
  return $$rendered;
});
const appsConfig = {
  music: {
    title: "Music player",
    icon: "/icons/cd_audio.png",
    position: { x: 10, y: 10 },
    open: true,
    component: AudioPlayer
  },
  about: {
    title: "About",
    icon: "/icons/computer_explorer_cool-0.png",
    position: { x: 10, y: 110 },
    open: false,
    component: About
  },
  notepad: {
    title: "Notepad",
    icon: "/icons/template_empty-2.png",
    position: { x: 10, y: 310 },
    open: false,
    component: Notepad
  },
  rain: {
    title: "Rain",
    icon: "/icons/paint_file-5.png",
    position: { x: 10, y: 210 },
    open: false,
    component: Rain
  },
  literal: {
    title: "Literal",
    icon: "/icons/paint_file-5.png",
    position: { x: 10, y: 210 },
    open: false,
    component: Literal,
    hidden: true
  }
};
const apps = writable$1(appsConfig);
const openApps = writable$1([]);
apps.subscribe((val) => {
  const keys = Object.keys(val);
  const result = keys.filter((key) => val[key].open);
  openApps.set(result);
});
const openAppsStack = writable$1([]);
const focusedApp = writable$1("music");
var Icon_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".icon.svelte-esdisy{width:50px;padding:5px;display:flex;flex-direction:column;justify-content:center;position:absolute;z-index:9;cursor:pointer}img.svelte-esdisy{width:100%}.label.svelte-esdisy{margin-top:5px;font-family:monospace;color:white;text-align:center;font-size:10px;width:100%}.selected.svelte-esdisy{background-color:rgba(255, 255, 255, 0.288);outline:1px dotted rgb(255, 255, 255)}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { src } = $$props;
  let { onClick } = $$props;
  let { position = { x: 0, y: 0 } } = $$props;
  let icon;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css$4);
  return `<div class="${["icon svelte-esdisy", ""].join(" ").trim()}"${add_attribute("this", icon, 0)}><img${add_attribute("src", src, 0)}${add_attribute("alt", label, 0)} class="${"svelte-esdisy"}">
	<div class="${"label svelte-esdisy"}">${escape(label)}</div>
</div>`;
});
var Desktop_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".desktop.svelte-11g8ccb{position:relative;flex:1;background-color:rgb(4, 121, 124);display:flex;flex-direction:column;padding:10px}",
  map: null
};
function getKey(key) {
  return key;
}
const Desktop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $apps, $$unsubscribe_apps;
  let $openAppsStack, $$unsubscribe_openAppsStack;
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  $$unsubscribe_openAppsStack = subscribe(openAppsStack, (value) => $openAppsStack = value);
  $$result.css.add(css$3);
  $$unsubscribe_apps();
  $$unsubscribe_openAppsStack();
  return `<div class="${"desktop svelte-11g8ccb"}">${each(Object.entries($apps), ([key, app]) => {
    return `${!app.hidden ? `${validate_component(Icon, "Icon").$$render($$result, {
      label: app.title,
      src: app.icon,
      onClick: () => {
        app.open = true;
        focusedApp.set(getKey(key));
        openAppsStack.set([...$openAppsStack.filter((x) => x !== getKey(key)), getKey(key)]);
      },
      position: app.position
    }, {}, {})}
			${app.open ? `<div${add_attribute("style", `z-index: ${$openAppsStack.findIndex((appKey) => appKey === key) + 100}`, 0)}>${validate_component(app.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
				</div>` : ``}` : ``}`;
  })}
</div>`;
});
var Taskbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".taskbar.svelte-s4etv.svelte-s4etv{height:50px;width:100vw;background-color:rgb(195, 195, 194);border-width:3px 3px 0 0;border-style:groove;border-color:rgb(244, 244, 244);box-sizing:border-box;overflow:hidden;display:flex;flex-direction:row;justify-content:space-between}.left.svelte-s4etv.svelte-s4etv{display:flex}.start.svelte-s4etv.svelte-s4etv{width:70px;border-width:2px;border-style:outset;border-color:rgb(241, 241, 241);margin:5px 5px;font-size:18px;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer;user-select:none}.start.svelte-s4etv.svelte-s4etv:active{border-style:groove;border-color:rgb(196, 196, 196)}.start.svelte-s4etv img.svelte-s4etv{margin-right:5px}.clock.svelte-s4etv.svelte-s4etv{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:0 5px;width:100px;border-left:2px groove rgb(241, 241, 241);margin:3px}.apps.svelte-s4etv.svelte-s4etv{height:100%;display:flex;flex-direction:row;margin-left:10px}.app.svelte-s4etv.svelte-s4etv{display:flex;align-items:center;user-select:none;width:150px;border-color:rgb(237, 237, 237);border-width:2px;border-style:outset;background-color:rgb(195, 195, 194);margin:5px 0;padding:0 10px}.app.svelte-s4etv.svelte-s4etv:active{border-style:groove;border-color:rgb(196, 196, 196)}.app.svelte-s4etv img.svelte-s4etv{height:20px;width:20px;margin-right:5px}",
  map: null
};
function getDate() {
  const today = new Date();
  const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  const time = today.getHours() + ":" + today.getMinutes();
  return { date, time };
}
const Taskbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openApps, $$unsubscribe_openApps;
  let $$unsubscribe_openAppsStack;
  let $apps, $$unsubscribe_apps;
  $$unsubscribe_openApps = subscribe(openApps, (value) => $openApps = value);
  $$unsubscribe_openAppsStack = subscribe(openAppsStack, (value) => value);
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  let dateTime = getDate();
  $$result.css.add(css$2);
  $$unsubscribe_openApps();
  $$unsubscribe_openAppsStack();
  $$unsubscribe_apps();
  return `<div class="${"taskbar svelte-s4etv"}"><div class="${"left svelte-s4etv"}"><div class="${"start svelte-s4etv"}"><img src="${"/icons/world-5.png"}" alt="${"Start icon"}" class="${"svelte-s4etv"}">
			<span>Start</span></div>

		<div class="${"apps svelte-s4etv"}">${each($openApps, (appKey) => {
    return `<div class="${"app svelte-s4etv"}"><div class="${"app-icon"}"><img${add_attribute("src", $apps[appKey].icon, 0)} alt="${"App icon"}" class="${"svelte-s4etv"}"></div>
					<div class="${"app-title"}">${escape($apps[appKey].title)}</div>
				</div>`;
  })}</div></div>
	<div class="${"right"}"><div class="${"clock svelte-s4etv"}"><div>${escape(dateTime.time)}</div>
			<div>${escape(dateTime.date)}</div></div></div>
</div>`;
});
var Wrapper_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-439g0q{height:100vh;width:100vw;background-color:#fafafa;display:flex;flex-direction:column;overflow:hidden}",
  map: null
};
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-439g0q"}">${validate_component(Desktop, "Desktop").$$render($$result, {}, {}, {})}
	${validate_component(Taskbar, "Taskbar").$$render($$result, {}, {}, {})}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;font-family:sans-serif;background-color:#fafafa}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
