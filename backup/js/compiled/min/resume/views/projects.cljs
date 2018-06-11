(ns resume.views.projects)

(defn component []
  [:div
   [:h3.josefine "Projects"]
   [:p.merriweather "Side projects I am more than happy to talk about"]
   [:h4.josefine "Motion Controlled Drone Flight"]
   [:p.merriweather
    [:strong "Java (Android) | "]
    "Uses a Myo Band on your arm to do basic flight with a 3DR Iris drone."]
   [:h4.josefine "News Reliability"]
   [:p.merriweather
    [:strong "Python | "]
    "My first attempt and programatically determining how accurate a news story is."]
   [:h4.josefine "Browser Network Tracking"]
   [:p.merriweather
    [:strong "JavaScript | "]
    "Chrome plugin to visualize what network calls are being made."]
   [:h4.josefine "React/Redux Component Generator"]
   [:p.merriweather
    [:strong "JavaScript | "]
    "Think Yoeman at the component level."]
   [:h4.josefine "React Scroll Mechanics"]
   [:p.merriweather
    [:strong "JavaScript | "]
    "How to tie two scroll views together with different animations."]
   [:h4.josefine "Meal Planner"]
   [:p.merriweather
    [:strong "JavaScript | Clojure/ClojureScript | "]
    "Version one was done in Javascript. React Native / Node. Version two (very early still) is being worked on in Clojure / Cljs."]])
