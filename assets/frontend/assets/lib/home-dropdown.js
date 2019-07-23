window.hr__options = [
    { id: 0, text: 'Google Drive - Mirror 01', url_to_redirect: 'https://google.com/'  },
    { id: 1, text: 'MEGA - Mirror 02', url_to_redirect: 'https://youtube.com/' }
];

window.hr__actionHandler = {
    func: (o) => {
        location.href = o.url_to_redirect
    },
    btn_text: 'Download Texture Pack'
}