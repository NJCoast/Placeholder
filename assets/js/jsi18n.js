

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "<div>": "<div>", 
    "<iframe frameborder='0' width='0' height='0'/>": "<iframe frameborder='0' width='0' height='0'/>", 
    "<script>": "<script>", 
    "About this Map": "About this Map", 
    "Abstract": "Abstract", 
    "Abstract:": "Abstract:", 
    "Add Layers": "Add Layers", 
    "All": "All", 
    "Area": "Area", 
    "Available Layers": "Available Layers", 
    "Background": "Background", 
    "CADRG-Global Navigation Chart": "CADRG-Global Navigation Chart", 
    "CADRG-Jet Navigation Chart": "CADRG-Jet Navigation Chart", 
    "CADRG-Joint Operations Graphic": "CADRG-Joint Operations Graphic", 
    "CADRG-Operational Navigation Chart": "CADRG-Operational Navigation Chart", 
    "CADRG-Tactical Pilotage Chart": "CADRG-Tactical Pilotage Chart", 
    "CADRG-Topographic Line Map 100K": "CADRG-Topographic Line Map 100K", 
    "CADRG-Topographic Line Map 50K": "CADRG-Topographic Line Map 50K", 
    "Cancel": "Cancel", 
    "Change layer format and style": "Change layer format and style", 
    "Clear All": "Clear All", 
    "Clear Selected": "Clear Selected", 
    "Comma Separated Value": "Comma Separated Value", 
    "Connection Error": "Connection Error", 
    "Contact": "Contact", 
    "Controlled Image Base-1 Meter": "Controlled Image Base-1 Meter", 
    "Controlled Image Base-10 Meter": "Controlled Image Base-10 Meter", 
    "Controlled Image Base-5 Meter": "Controlled Image Base-5 Meter", 
    "Create Map": "Create Map", 
    "Creating PDF...": "Creating PDF...", 
    "Data": "Data", 
    "Details...": "Details...", 
    "Done": "Done", 
    "Download:": "Download:", 
    "Downloading...": "Downloading...", 
    "ERDAS Imagine": "ERDAS Imagine", 
    "ESRI Shapefile": "ESRI Shapefile", 
    "Edit Metadata": "Edit Metadata", 
    "Edit Styles": "Edit Styles", 
    "Edit layer styles": "Edit layer styles", 
    "Enter comments here.": "Enter comments here.", 
    "Enter map title here.": "Enter map title here.", 
    "Enter your region here ...": "Enter your region here ...", 
    "Enter your text here ...": "Enter your text here ...", 
    "Error While Saving": "Error While Saving", 
    "Error contacting server.\n Please check the url and try again.": "Error contacting server.\n Please check the url and try again.", 
    "Export Map": "Export Map", 
    "GeoJSON": "GeoJSON", 
    "GeoTIFF": "GeoTIFF", 
    "Get Feature Info": "Get Feature Info", 
    "Google Earth KML": "Google Earth KML", 
    "Height": "Height", 
    "Include legend?": "Include legend?", 
    "JPEG2000": "JPEG2000", 
    "Keywords:": "Keywords:", 
    "Large": "Large", 
    "Last Modified": "Last Modified", 
    "Layer Info": "Layer Info", 
    "Layer Properties": "Layer Properties", 
    "Layer files uploaded, configuring in GeoServer": "Layer files uploaded, configuring in GeoServer", 
    "Layers": "Layers", 
    "Legend": "Legend", 
    "Length": "Length", 
    "Loading": "Loading", 
    "Loading Map...": "Loading Map...", 
    "Loading...": "Loading...", 
    "Manage Styles": "Manage Styles", 
    "Map": "Map", 
    "Map Layers": "Map Layers", 
    "Map Size": "Map Size", 
    "Measure": "Measure", 
    "Metadata Links:": "Metadata Links:", 
    "Mini": "Mini", 
    "Missing a %s file, which is required": "Missing a %s file, which is required", 
    "MrSID-Multi-resolution Seamless Image Database": "MrSID-Multi-resolution Seamless Image Database", 
    "Name": "Name", 
    "National Imagery Transmission Format": "National Imagery Transmission Format", 
    "Next": "Next", 
    "No Layers Selected": "No Layers Selected", 
    "No abstract is provided for this layer.": "No abstract is provided for this layer.", 
    "No attribution information is provided for this layer.": "No attribution information is provided for this layer.", 
    "No background": "No background", 
    "No download URLs are definied for this layer.": "No download URLs are definied for this layer.", 
    "No keywords are listed for this layer.": "No keywords are listed for this layer.", 
    "No layers are currently selected.": "No layers are currently selected.", 
    "No metadata URLs are defined for this layer.": "No metadata URLs are defined for this layer.", 
    "None": "None", 
    "Open Map": "Open Map", 
    "Operation Failed": "Operation Failed", 
    "Pan Map": "Pan Map", 
    "Paper size:": "Paper size:", 
    "Performing Final GeoServer Config Step": "Performing Final GeoServer Config Step", 
    "Performing GeoServer Config Step": "Performing GeoServer Config Step", 
    "Permalink": "Permalink", 
    "Please wait": "Please wait", 
    "Premium": "Premium", 
    "Prev": "Prev", 
    "Print": "Print", 
    "Print Map": "Print Map", 
    "Print Preview": "Print Preview", 
    "Properties": "Properties", 
    "Provided by:": "Provided by:", 
    "Publish Map": "Publish Map", 
    "Queryable": "Queryable", 
    "Remove": "Remove", 
    "Remove Layer": "Remove Layer", 
    "Resolution:": "Resolution:", 
    "Save": "Save", 
    "Save Map": "Save Map", 
    "Save as Copy": "Save as Copy", 
    "Search": "Search", 
    "Search Maps": "Search Maps", 
    "Select": "Select", 
    "Select or create a Geogig repository.": "Select or create a Geogig repository.", 
    "Select:": "Select:", 
    "Selected Layers": "Selected Layers", 
    "Showing": "Showing", 
    "Small": "Small", 
    "Sorry, your map could not be saved.": "Sorry, your map could not be saved.", 
    "Switch to Google Earth 3D Viewer": "Switch to Google Earth 3D Viewer", 
    "The column %1 was renamed to %2 <br/>": "The column %1 was renamed to %2 <br/>", 
    "The file %s is an unsupported file type, please select another file.": "The file %s is an unsupported file type, please select another file.", 
    "The map that you are trying to load does not exist.  Creating a new map instead.": "The map that you are trying to load does not exist.  Creating a new map instead.", 
    "The server returned an error": "The server returned an error", 
    "This data is stored on a remote server": "This data is stored on a remote server", 
    "This map has not yet been saved.": "This map has not yet been saved.", 
    "Title": "Title", 
    "Unexpected Error": "Unexpected Error", 
    "Unknown Map": "Unknown Map", 
    "View available data from:": "View available data from:", 
    "View this Map": "View this Map", 
    "Width": "Width", 
    "You are trying to upload an incomplete set of files or not all mandatory options have been validated.\n\nPlease check for errors in the form!": "You are trying to upload an incomplete set of files or not all mandatory options have been validated.\n\nPlease check for errors in the form!", 
    "You can continue configuring your layer.": "You can continue configuring your layer.", 
    "You do not have permission to view this data": "You do not have permission to view this data", 
    "You must be logged in to save this map.": "You must be logged in to save this map.", 
    "You need to specify more information in order to complete your upload": "You need to specify more information in order to complete your upload", 
    "You need to specify more information in order to complete your upload.": "You need to specify more information in order to complete your upload.", 
    "Your layer was successfully uploaded": "Your layer was successfully uploaded", 
    "Your map is ready to be published to the web!  Simply copy the following HTML to embed the map in your website:": "Your map is ready to be published to the web!  Simply copy the following HTML to embed the map in your website:", 
    "Your search did not match any items.": "Your search did not match any items.", 
    "Zip Archive": "Zip Archive", 
    "Zoom In": "Zoom In", 
    "Zoom Level": "Zoom Level", 
    "Zoom Level {zoom}": "Zoom Level {zoom}", 
    "Zoom Out": "Zoom Out", 
    "Zoom level": "Zoom level", 
    "Zoom to Layer Extent": "Zoom to Layer Extent", 
    "Zoom to Next Extent": "Zoom to Next Extent", 
    "Zoom to Previous Extent": "Zoom to Previous Extent", 
    "Zoom to Visible Extent": "Zoom to Visible Extent", 
    "of": "of", 
    "or add a new server.": "or add a new server.", 
    "permalink": "permalink"
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "N j, Y, P", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "N j, Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));


