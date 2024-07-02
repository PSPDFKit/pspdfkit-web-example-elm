import { Elm } from "./Main";
import PSPDFKit from "pspdfkit";

let instance;

const app = Elm.Main.init({
  node: document.body,
});

app.ports.configure.subscribe((data) => {
  const initialViewState = new PSPDFKit.ViewState(data.viewState);
  const config = { ...data, initialViewState };

  PSPDFKit.load(config).then(async (pspdfkit) => {
    instance = pspdfkit;
  });
});

app.ports.annotate.subscribe((data) => {
  const annotations = data.annotations.map(
    (a) =>
      new PSPDFKit.Annotations.TextAnnotation({
        ...a,
        fontColor: new PSPDFKit.Color(PSPDFKit.Color[a.fontColor]),
        backgroundColor: new PSPDFKit.Color(PSPDFKit.Color[a.backgroundColor]),
        boundingBox: new PSPDFKit.Geometry.Rect(a.boundingBox),
      })
  );

  instance.create(annotations);
});
