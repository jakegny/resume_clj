(ns resume.views.skills)

(defn component []
  [:div
   [:h3.josefine "Skills"]
   [:div
    [:div {:class "bar js"} "JS | React/Redux | Node"]
    [:div {:class "bar devops"} "DevOps | AWS | CI/CD | Docker | ..."]
    [:div {:class "bar clojure"} "Clojure | ClojureScript"]
    [:div {:class "bar java"} "Java | Spring"]
    [:div {:class "bar python"} "Python | Data Science"]
    [:div {:class "xp-bar1"}
     [:div {:class "xp-marker-left"}
      [:span "Beginner"]]
     [:div {:class "xp-marker-left"}
      [:span "Proficient"]]
     [:div {:class "xp-marker-right"}
      [:span "Expert"]]]]])
