"use babel";

export default {
  texBin: {
    title: "TeX Bin",
    description: "Location of your TeX installation bin.",
    type: "string",
    default: "",
    order: 1,
  },

  ghostscriptBin: {
    title: "Ghostscript conversion utilities",
    description: "Path to ps2pdf and dvipdf",
    type: "string",
    default: "",
    order: 2,
  },

  texInputs: {
    title: "TeX Packages",
    description: "Location of your custom TeX packages directory.",
    type: "string",
    default: "",
    order: 3,
  },

  advancedEnabled: {
    title: "Enable advanced LaTeXmk Options",
    type: "boolean",
    default: false,
    order: 4,
  },

  openOutputEnabled: {
    title: "Open Output",
    description: "Open the output file after successful compilation.",
    type: "boolean",
    default: true,
    order: 5,
  },

  synctexVertAlign: {
    title: "SyncTeX Vertical Alignment",
    description: "A number between 0 (top) and 1 (bottom), e.g., 0.5 for vertical centering.",
    type: "number",
    default: 0.0,
    minimum: 0.0,
    maximum: 1.0,
    order: 6,
  },
};
