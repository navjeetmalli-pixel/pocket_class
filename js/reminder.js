// Daily practice reminder: one local notification a day at the time the student picks.
// Phone apps only (official Capacitor Local Notifications plugin). A web page can't schedule notifications
// while it is closed, so on the website the setting is hidden. Nothing leaves the device.

const Reminder = (() => {
  const ID = 1;
  const plugin = () => (Native.is ? Native.plugin("LocalNotifications") : null);
  const available = () => !!plugin();

  const parts = (time) => {
    const [h, m] = String(time).split(":").map(Number);
    return { hour: h || 0, minute: m || 0 };
  };

  async function cancel() {
    const p = plugin();
    if (!p) return;
    try {
      await p.cancel({ notifications: [{ id: ID }] });
    } catch (e) {
      /* nothing was scheduled */
    }
  }

  // Schedules (or re-schedules) the daily notification. Returns false if it couldn't, e.g. no permission.
  async function schedule(time) {
    const p = plugin();
    if (!p) return false;
    try {
      await cancel();
      await p.schedule({
        notifications: [
          {
            id: ID,
            title: "Pocket Class",
            body: t("5 minutes of practice? Your question of the day is waiting."),
            schedule: { on: parts(time), allowWhileIdle: true },
          },
        ],
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  // Asks for permission, then schedules. Returns false if the student said no.
  async function enable(time) {
    const p = plugin();
    if (!p) return false;
    try {
      let { display } = await p.checkPermissions();
      if (display !== "granted") ({ display } = await p.requestPermissions());
      if (display !== "granted") return false;
    } catch (e) {
      return false;
    }
    return schedule(time);
  }

  // At start-up: tapping the notification opens Home, and the text is renewed in the current language.
  function start() {
    if (!available()) return;
    const C = window.Capacitor;
    if (C && C.addListener) C.addListener("LocalNotifications", "localNotificationActionPerformed", () => (location.hash = "#/"));
    const r = Store.state.reminder;
    if (r.on) schedule(r.time);
  }

  return { available, enable, schedule, cancel, start };
})();
