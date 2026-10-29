package io.github.navjeetmallipixel.vidya;

import android.content.Context;
import android.print.PrintAttributes;
import android.print.PrintManager;
import android.webkit.WebView;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * window.print() does nothing in Android's WebView, so practice sheets and formula sheets print
 * through this plugin. It prints the web view with its print stylesheet, and "Save as PDF" works too.
 */
@CapacitorPlugin(name = "VidyaPrint")
public class VidyaPrintPlugin extends Plugin {

    @PluginMethod
    public void print(PluginCall call) {
        String title = call.getString("title", "Vidya");
        getActivity().runOnUiThread(() -> {
            WebView webView = getBridge().getWebView();
            PrintManager printManager = (PrintManager) getActivity().getSystemService(Context.PRINT_SERVICE);
            if (printManager == null) {
                call.reject("Printing isn't available");
                return;
            }
            printManager.print(title, webView.createPrintDocumentAdapter(title), new PrintAttributes.Builder().build());
            JSObject result = new JSObject();
            result.put("started", true);
            call.resolve(result);
        });
    }
}
