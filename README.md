# declarativeGoogleCharts
A simple drop-in javascript to let you better abstract your use of google charts in your webapp

You can import this js file instead of importing google charts directly, and then use a declarative style for defining your table elements, allowing you to populate your json data directly in a template-friendly way, and not write any new javascript for new views.

This is not intended as a library to use as-is, but as a starting point.  Look at the chartDefaults assignment on line 10.  Here, you can the default parameters appropriate to your webapp, for any chart types you want to support, and add in more chart types as desired.  You can make multiple chart type definitions that are backed by the same google chart api class, if you want to have dramatically different default values.

You can then use your charts like this, providing data and overridden options in a declarative style:
~~~~
    <column_chart
            data='[["Date","Red","Orange"],
                ["11/6",0.1,0.3],["11/7",0.25,0.04],["11/8",0.08,0.2],
                ["11/9",0.1,0.3],["11/10",0.25,0.04],["11/11",0.08,0.2]]'
            options='{"bar": {"width": 20}, "chartArea": { "height": "90%" }}'
    ></column_chart>
~~~~

Essentially, chartDefaults is defining new html tags you can use, except they are discovered and populated post-pageload by javascript.

I made this because I was displeased with the standard ways of using the charts api itself, which is to leave a div in your document with a unique id, and then also include a block of javascript code to find and populate it.  This re-couples the space in your DOM with the information that is intended to go there, so there are no worries about making the space but forgetting to populate it, or populating space you forgot to leave, or making sure separate charts have unique IDs.  With this system, a template could spit out N chart definitions in a for loop and they would all populate correctly.  It also allows you to save a lot of repition by standardizing your app's styling into declarativeTables.js and only putting the parts that are unique into each tag.
