// Load custom CSS stylesheet from  ~/.config/gnome-shell/gnome-shell.css.
// It's similar to GTK's ~/.config/gtk-3.0/gtk.css.
// This extension is based on "User Theme" official extension.

const GLib = imports.gi.GLib;
const Main = imports.ui.main;

function enable() {
    let stylesheetPath = GLib.build_filenamev(
        [GLib.get_user_config_dir(), 'gnome-shell', 'gnome-shell.css']
    );

    try {
        Main.setThemeStylesheet(stylesheetPath);
        Main.loadTheme();
    }
    catch(e) {}
}

function disable() {
    Main.setThemeStylesheet(null);
    Main.loadTheme();
}
