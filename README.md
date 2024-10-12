User style sheet & font — GNOME Shell extension
===

This extension loads CSS file from `~/.config/gnome-shell/gnome-shell.css`
allowing you to customize GNOME Shell appearance with custom style sheet.
It works similar to `~/.config/gtk-3.0/gtk.css` but in the shell.

Installation
---

This extension can be installed from official repository with GNOME Shell
extensions in your web browser:
https://extensions.gnome.org/extension/3414/user-stylesheet-font.

Also, it is possible to install the extension from command line:

```bash
dbus-send --type=method_call --dest=org.gnome.Shell /org/gnome/Shell \
    org.gnome.Shell.Extensions.InstallRemoteExtension string:'user-stylesheet@tomaszgasior.pl'
```

Alternatively, you can copy all files from this repository to
`~/.local/share/gnome-shell/extensions/user-stylesheet@tomaszgasior.pl`
directory and restart GNOME Shell.

How to use custom style sheet
---

* Put your CSS code in `gnome-shell.css` file inside `~/.config/gnome-shell` directory.
* You must restart GNOME Shell after creating `gnome-shell.css` file.
  Just log out and log in again.
* You don't have to restart GNOME Shell to update style sheet from existing
  `gnome-shell.css` file. Just press Alt+F2 and type `rt`.

To make writing CSS code easier you can take a look at GNOME Shell built-in theme:
https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/main/data/theme.
