const { Gio, GLib, Pango, St } = imports.gi;
const Main = imports.ui.main;

const GNOME_DESKTOP_SCHEMA = 'org.gnome.desktop.interface';
const GNOME_DESKTOP_FONT_KEY = 'font-name';

let themeContext = St.ThemeContext.get_for_stage(global.stage);
let stylesheetFile;
let desktopSettings;
let desktopSettingsChangedId;

function _setShellFont()
{
    // in GNOME Shell 3.36 stylesheet.css is enough
    // https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/486/
    if ('undefined' !== typeof St.Settings && 'undefined' !== typeof St.Settings.get().font_name) {
        return;
    }

    desktopSettings = Gio.Settings.new(GNOME_DESKTOP_SCHEMA);

    let desktopSettingsChangedFunc = function() {
        let font = Pango.FontDescription.from_string(
            desktopSettings.get_string(GNOME_DESKTOP_FONT_KEY)
        );

        themeContext.set_font(font);
    };

    desktopSettingsChangedFunc();
    desktopSettingsChangedId = desktopSettings.connect('changed', desktopSettingsChangedFunc);
}

function _unsetShellFont()
{
    if ('undefined' !== typeof St.Settings && 'undefined' !== typeof St.Settings.get().font_name) {
        return;
    }

    let font = Pango.FontDescription.from_string('sans-serif 10');

    themeContext.set_font(font);
    desktopSettings.disconnect('changed', desktopSettingsChangedId);
}

function _loadCustomStyleheet()
{
    let stylesheetPath = GLib.build_filenamev(
        [GLib.get_user_config_dir(), 'gnome-shell', 'gnome-shell.css']
    );

    try {
        stylesheetFile = Gio.File.new_for_path(stylesheetPath);
        themeContext.get_theme().load_stylesheet(stylesheetFile);
    }
    catch(e) {}
}

function _unloadCustomStyleheet()
{
    if (stylesheetFile) {
        themeContext.get_theme().unload_stylesheet(stylesheetFile);
    }
}

function enable()
{
    _setShellFont();
    _loadCustomStyleheet();
}

function disable()
{
    _unsetShellFont();
    _unloadCustomStyleheet();
}
