(ns resume.views.contact)

(defn component []
  [:div
   [:h3.josefine "Contact"]
   [:div
    [:span {:class "fa fa-phone contact-icon phone"}]
    [:span {:class "contact-item"} "801-541-4191"]]
   [:div
    [:span {:class "fa fa-envelope contact-icon email"}]
    [:span {:class "contact-item" :href "mailto:jakegny@gmail.com"} "jakegny@gmail.com"]]
   [:div
    [:span {:class "fa fa-github contact-icon github"}]
    [:span {:class "contact-item" :href "https://github.com/jakegny"} "https://github.com/jakegny"]]
   [:div
    [:span {:class "fa fa-twitter contact-icon twitter"}]
    [:span {:class "contact-item" :href "https://twitter.com/jakegny"} "https://twitter.com/jakegny"]]
   [:div
    [:span {:class "fa fa-linkedin contact-icon linkedin"}]
    [:span {:class "contact-item" :href "https://www.linkedin.com/in/jakenylund/"} "https://www.linkedin.com/in/jakenylund/"]]])
