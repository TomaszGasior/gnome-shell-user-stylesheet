User style sheet & font — GNOME Shell extension
===

This extension loads CSS file from `~/.config/gnome-shell/gnome-shell.css`
allowing you to customize GNOME Shell appearance with custom style sheet.
It works similar to `~/.config/gtk-3.0/gtk.css` but in the shell.
Also, this extension applies GTK font name and font size to GNOME Shell.

Installation
---

TODO

How to use custom style sheet
---

* Put your CSS code in `gnome-shell.css` file inside `~/.config/gnome-shell` directory.
* You must restart GNOME Shell after creating `gnome-shell.css` file.
  Press Alt+F2 and type `r` (only legacy X11) or just logout and login again.
* You don't have to restart GNOME Shell to update style sheet from existing
  `gnome-shell.css` file. Just press Alt+F2 and type `rt`.

To make writing CSS code easier you can take a look at GNOME Shell built-in theme:
https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/master/data/theme.

How to use custom font
---

You can modify interface font several ways and the change will be applied immediately.

* GNOME Tweaks → Fonts → Interface Text.
* dconf Editor → `org` → `gnome` → `desktop` → `interface` → `font-name`.
* CLI command: `gsettings set org.gnome.desktop.interface font-name "Sans 10"`.

This extension is not needed to change font name in GNOME Shell since
version 3.36 but font size is still hardcoded. More information:
https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/486.

Custom styles examples
---

### Remove top panel rounded corners

```css
.panel-corner {
    -panel-corner-radius: 0px;
    -panel-corner-background-color: transparent;
    -panel-corner-border-width: 0px;
    -panel-corner-border-color: transparent;
}
```

### Make workspace switcher smaller

```css
.ws-switcher-box {
    height: 30px;
}
```

### Hide OS icon in RHEL and CentOS

```css
.panel-logo-icon {
    icon-size: 1px;
    padding-right: 0;
}
```
