fn main() {
    generate_build_info();
    tauri_build::build();
}

fn generate_build_info() {
    use std::fs::File;
    use std::io::Write;
    use std::process::Command;
    use std::{env, path::Path};

    let git_hash = Command::new("git")
        .args(["rev-parse", "--short", "HEAD"])
        .output()
        .ok()
        .and_then(|o| String::from_utf8(o.stdout).ok())
        .map(|s| s.trim().to_string())
        .unwrap_or_else(|| "unknown".to_string());

    let git_version = Command::new("git")
        .args(["describe", "--tags", "--always", "--dirty"])
        .output()
        .ok()
        .and_then(|o| String::from_utf8(o.stdout).ok())
        .map(|s| s.trim().to_string())
        .unwrap_or_else(|| "0.0.0".to_string());

    let build_time = chrono::Utc::now().to_rfc3339();

    let contents = format!(
        r#"
        pub const VERSION: &str = "{git_version}";
        pub const GIT_HASH: &str = "{git_hash}";
        pub const BUILD_DATE: &str = "{build_time}";
        "#
    );

    let out_dir = env::var("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("build_info.rs");
    let mut file = File::create(dest_path).unwrap();
    file.write_all(contents.as_bytes()).unwrap();
}
