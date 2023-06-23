(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    825: function (e, t, n) {
      __NEXT_REGISTER_PAGE("/_error", function () {
        return (e.exports = n(826)), { page: e.exports.default };
      });
    },
    826: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        a = n(4),
        r = n(590),
        o = n(5),
        l = n.n(o),
        c = a.a.div.withConfig({
          displayName: "_error__Container",
          componentId: "sc-1o52dws-0",
        })(["display:flex;flex-direction:column;justify-content:center;"]),
        d = a.a.div.withConfig({
          displayName: "_error__HeaderError",
          componentId: "sc-1o52dws-1",
        })([
          "display:flex;flex-direction:row;justify-content:flex-start;padding:50px;@media (max-width:414px){margin-bottom:70px;justify-content:center;}@media (max-width:320px){margin-bottom:50px;}",
        ]),
        s = a.a.div.withConfig({
          displayName: "_error__Stripe",
          componentId: "sc-1o52dws-2",
        })([
          "display:flex;flex-direction:row;justify-content:center;background-color:#00985c;height:250px;@media (max-width:320px){height:350px;}",
        ]),
        p = a.a.div.withConfig({
          displayName: "_error__ErrorContent",
          componentId: "sc-1o52dws-3",
        })([
          "display:flex;flex-direction:column;justify-content:center;align-content:center;margin-bottom:150px;@media (max-width:414px){padding:30px;}",
        ]),
        m = a.a.div.withConfig({
          displayName: "_error__Paragraph",
          componentId: "sc-1o52dws-4",
        })([
          "display:flex;flex-direction:row;justify-content:center;height:190px;padding:10px;@media (max-width:414px){text-align:center;padding:10px 40px;}",
        ]),
        f = a.a.h2.withConfig({
          displayName: "_error__ErrorMsg",
          componentId: "sc-1o52dws-5",
        })([
          "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;color:#ffffff;font-size:190%;font-family:Unimedsans,sans-serif;font-weight:400;@media (max-width:414px){text-align:center;}",
        ]);
      t.default = function () {
        return i.createElement(
          c,
          null,
          i.createElement(d, null, i.createElement(r.a, null)),
          i.createElement(
            s,
            null,
            i.createElement(
              p,
              null,
              i.createElement("img", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                },
                src: "/static/css/images/img404.svg",
                alt: "Erro 404 - Página não encontrada.",
              }),
              i.createElement(f, null, "Erro: 404 Página não encontrada")
            )
          ),
          i.createElement(
            m,
            null,
            i.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5%",
                },
              },
              i.createElement(
                "span",
                null,
                "Desculpe, a página que você está tentando acessar não existe."
              ),
              i.createElement(
                "span",
                null,
                "Verifique se a URL está correta ou vá para a ",
                i.createElement(
                  "b",
                  { style: { color: "#00985c" } },
                  i.createElement(
                    l.a,
                    { href: "" },
                    i.createElement("a", null, "página inicial.")
                  )
                )
              )
            )
          )
        );
      };
    },
  },
  [[825, 0, 1]],
]);
