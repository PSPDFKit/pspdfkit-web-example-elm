import { Elm } from "./Main";
import PSPDFKit from "pspdfkit";

let instance;

const app = Elm.Main.init({
  node: document.body,
  flags: {
    licenseKey: process.env.PSPDFKIT_LICENSE_KEY
  }
});

app.ports.configure.subscribe(data => {
  const initialViewState = new PSPDFKit.ViewState(data.viewState);
  const config = { ...data, initialViewState };

  PSPDFKit.load(config).then(async pspdfkit => {
    instance = pspdfkit;
  });
});

app.ports.annotate.subscribe(data => {
  data.annotations.forEach(a => {
    const annotation = new PSPDFKit.Annotations.TextAnnotation({
      ...a,
      fontColor: new PSPDFKit.Color(PSPDFKit.Color[a.fontColor]),
      backgroundColor: new PSPDFKit.Color(PSPDFKit.Color[a.backgroundColor]),
      boundingBox: new PSPDFKit.Geometry.Rect(a.boundingBox)
    });

    instance.createAnnotation(annotation);
  });
});
