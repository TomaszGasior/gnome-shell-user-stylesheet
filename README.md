gnome-shell-user-stylesheet
===

Simple GNOME Shell extension that allows to override default Adwaita theme styles without need to create fake theme for User Theme extension.

Installation
---

1. Copy `user-stylesheet@tomaszgasior.pl` to `~/.local/share/gnome-shell/extensions`.
2. Enable extension using GNOME Tweaks or using `gnome-shell-extension-tool -e user-stylesheet@tomaszgasior.pl` command.
3. Restart your shell. On Xorg press Alt+F2 and type `r`, on Wayland log out and log in again.
4. Create `~/.config/gnome-shell/gnome-shell.css` file and write your own styles.
5. To reload shell styles press Alt+F2 and type `rt` (works on Wayland too).

You may also use `./install.sh` script and then restart shell. ;)
