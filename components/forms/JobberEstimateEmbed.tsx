"use client";

import { useEffect } from "react";

// Official Jobber "work request" embed snippet, provided by the owner. The
// script reads clienthub_id/form_url off the <script> tag itself and renders
// the live form into the div with that same id — attribute names and the div
// id must match exactly what Jobber issued.
const CLIENTHUB_ID = "26fc5b60-242d-4d99-ac9a-6c9ac2fef278-4596133";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/26fc5b60-242d-4d99-ac9a-6c9ac2fef278/public/work_request/embedded_work_request_form?form_id=4596133";
const EMBED_SCRIPT_SRC =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const EMBED_CSS_HREF = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";

export function JobberEstimateEmbed() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${EMBED_CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = EMBED_CSS_HREF;
      link.media = "screen";
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("clienthub_id", CLIENTHUB_ID);
    script.setAttribute("form_url", FORM_URL);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id={CLIENTHUB_ID} />;
}
