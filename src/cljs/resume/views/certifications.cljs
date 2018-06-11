(ns resume.views.certifications)

(defn component []
  [:div
   [:h3.josefine "Certifications"]
   [:div
    [:img {:class "cert-logo" :src "static/images/AWSSABadge.png" :alt "AWS Solutions Architect Badge"}]
    [:p.josefine {:class "cert-title"} "AWS Solutions Architect"]]
   [:p.merriweather
    [:a {:target "_blank" :href "https://aw.certmetrics.com/amazon/public/verification.aspx"} "Verify here"]
    " - Number: 5XRJ2LGKD241QY51"]])
