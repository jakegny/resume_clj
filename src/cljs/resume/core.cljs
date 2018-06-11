(ns resume.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [cljsjs.react-bootstrap]
              [resume.views.about :as about]
              [resume.views.title :as title]
              [resume.views.experience :as experience]
              [resume.views.skills :as skills]
              [resume.views.projects :as projects]
              [resume.views.contact :as contact]
              [resume.views.certifications :as certifications]))
;; -------------------------
;; React Bootstrap Definitions
(def Grid (reagent/adapt-react-class (aget js/ReactBootstrap "Grid")))

(def Row (reagent/adapt-react-class (aget js/ReactBootstrap "Row")))

(def Col (reagent/adapt-react-class (aget js/ReactBootstrap "Col")))

;; -------------------------
;; Views

(defn home-page []
  [:div {:class "App"}
   [Grid
    [Row {:class "show-grid"}
     [Col {:xs 12}
      [title/component]]]
    [Row {:class "show-grid"}
     [Col {:xs 12 :md 6}
      [experience/component]]
     [Col {:xs 12 :md 6}
      [about/component]
      [skills/component]
      [certifications/component]
      [projects/component]
      [contact/component]]]]])


; (defn home-page []
;   [:div [:h2 "Welcome to resume"]
;    [:div [:a {:target "_blank" :href "/about"} "go to about page"]]])
;
; (defn about-page []
;   [:div [:h2 "About resume"]
;    [:div [:a {:target "_blank" :href "/"} "go to the home page"]]])

;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

; (secretary/defroute "/about" []
  ; (reset! page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
