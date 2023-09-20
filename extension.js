import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import St from 'gi://St';

export default class UserStylesheetExtension
{
    enable()
    {
        let themeContext = St.ThemeContext.get_for_stage(global.stage);

        let stylesheetPath = GLib.build_filenamev(
            [GLib.get_user_config_dir(), 'gnome-shell', 'gnome-shell.css']
        );

        try {
            this.stylesheetFile = Gio.File.new_for_path(stylesheetPath);
            themeContext.get_theme().load_stylesheet(this.stylesheetFile);
        }
        catch(e) {}
    }

    disable()
    {
        let themeContext = St.ThemeContext.get_for_stage(global.stage);

        if (this.stylesheetFile) {
            themeContext.get_theme().unload_stylesheet(this.stylesheetFile);
        }
    }
}
