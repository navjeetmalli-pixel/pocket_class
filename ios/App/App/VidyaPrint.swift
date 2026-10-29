import Capacitor
import UIKit

// window.print() does nothing in WKWebView, so practice sheets and formula sheets print through this
// plugin. It prints the web view with its print stylesheet (answer key on its own page, no app chrome).
@objc(VidyaPrintPlugin)
public class VidyaPrintPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "VidyaPrintPlugin"
    public let jsName = "VidyaPrint"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "print", returnType: CAPPluginReturnPromise)
    ]

    @objc func print(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            guard let webView = self.bridge?.webView else {
                call.reject("No web view")
                return
            }
            let info = UIPrintInfo(dictionary: nil)
            info.outputType = .general
            info.jobName = call.getString("title") ?? "Vidya"
            let controller = UIPrintInteractionController.shared
            controller.printInfo = info
            controller.printFormatter = webView.viewPrintFormatter()
            let done: UIPrintInteractionController.CompletionHandler = { _, completed, _ in
                call.resolve(["completed": completed])
            }
            if UIDevice.current.userInterfaceIdiom == .pad {
                let rect = CGRect(x: webView.bounds.midX, y: webView.bounds.midY, width: 1, height: 1)
                controller.present(from: rect, in: webView, animated: true, completionHandler: done)
            } else {
                controller.present(animated: true, completionHandler: done)
            }
        }
    }
}

// Registers the app's own plugin with the Capacitor bridge.
class MainViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(VidyaPrintPlugin())
    }
}
