(ns resume.views.projects)

(defn component []
  [:div
   [:h3.josefine "Projects"]
   [:p.merriweather "Side projects I am more than happy to talk about"]
   [:h5.josefine "Learning Clojure - Book"]
   [:p.merriweather
    [:strong "Clojure | "]
    "I'm trying to compile a quick start book for developers who want to get into Clojure. "
    [:a {:target "_blank" :href "https://jakegny.gitbooks.io/learning-clojure/content/"} "See it here."]]
   [:h5.josefine "Motion Controlled Drone Flight"]
   [:p.merriweather
    [:strong "Java (Android) | "]
    "Uses a Myo Band on your arm to do basic flight with a 3DR Iris drone."]
   [:h5.josefine "News Reliability"]
   [:p.merriweather
    [:strong "Python | "]
    "My first attempt and programatically determining how accurate a news story is."]
   [:h5.josefine "Browser Network Tracking"]
   [:p.merriweather
    [:strong "JavaScript | "]
    "Chrome plugin to visualize what network calls are being made."]
   [:h5.josefine "React/Redux Component Generator"]
   [:p.merriweather
    [:strong "JavaScript | "]
    "Think Yoeman at the component level."]
   [:h5.josefine "React Scroll Mechanics"]
   [:p.merriweather
    [:strong "JavaScript | "]
    "How to tie two scroll views together with different animations."]
   [:h5.josefine "Meal Planner"]
   [:p.merriweather
    [:strong "JavaScript | Clojure/ClojureScript | "]
    "Version one was done in Javascript. React Native / Node. Version two (very early still) is being worked on in Clojure / Cljs."]])
