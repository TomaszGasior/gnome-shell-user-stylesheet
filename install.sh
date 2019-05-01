#!/bin/bash

mkdir -p "$HOME/.local/share/gnome-shell/extensions"
cp -R "user-stylesheet@tomaszgasior.pl" "$HOME/.local/share/gnome-shell/extensions"
gnome-shell-extension-tool --enable "user-stylesheet@tomaszgasior.pl"

mkdir -p "$HOME/.config/gnome-shell"
touch "$HOME/.config/gnome-shell/gnome-shell.css"
nautilus "$HOME/.config/gnome-shell"
