// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

include!(concat!(env!("OUT_DIR"), "/build_info.rs"));

#[tauri::command]
fn get_app_info() -> serde_json::Value {
    serde_json::json!({
        "version": VERSION,
        "commit": GIT_HASH,
        "build_date": BUILD_DATE
    })
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_app_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
