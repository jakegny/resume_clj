(ns ^:figwheel-no-load resume.dev
  (:require
    [resume.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
