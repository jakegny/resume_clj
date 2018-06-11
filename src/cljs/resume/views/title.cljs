(ns resume.views.title
  (:require [reagent.core :as reagent]
            [cljsjs.react-bootstrap]))

;; -------------------------
;; React Bootstrap Definitions
(def Row (reagent/adapt-react-class (aget js/ReactBootstrap "Row")))

(def Col (reagent/adapt-react-class (aget js/ReactBootstrap "Col")))

(defn component []
  [Row {:class "show-grid"}
   [Col {:xs 12 :md 3}
    [:img {:class "avatar" :src "static/images/avatar.jpg" :alt "picture of jake"}]]
   [Col {:xs 12 :md 9}
    [:div
     [:h2.josefine "Jake Nylund"]
     [:h4.merriweather "Engineer, Architect, Programmer"]]]])
