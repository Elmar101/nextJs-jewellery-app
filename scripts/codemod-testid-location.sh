# Function to find the codemod-testid script
find_codemod_script() {
    local pnpm_path=$(pnpm root -g)/codemod-testid/checkIfTestIdAdded.ts
    local npm_path=$(npm root -g)/codemod-testid/checkIfTestIdAdded.ts

    if [ -f "$pnpm_path" ]; then
        echo "$pnpm_path"
    elif [ -f "$npm_path" ]; then
        echo "$npm_path"
    else
        echo ""
    fi
}

CODEMOD_SCRIPT=$(find_codemod_script)

if [ -z "$CODEMOD_SCRIPT" ]; then
    echo "Error: codemod-testid script not found in global pnpm or npm directories"
    exit 1
fi