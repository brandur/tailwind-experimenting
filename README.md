
    curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
    chmod +x tailwindcss-macos-arm64
    mv tailwindcss-macos-arm64 tailwindcss


    ./tailwindcss -i src/main.css -o src/generated/output.css --watch
    ./tailwindcss -i src/main.css -o src/generated/output.css --minify
