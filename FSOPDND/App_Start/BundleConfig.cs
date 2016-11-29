using System.Web.Optimization;

namespace FSOPDND
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkID=303951
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app.js").Include(
                "~/Scripts/app.js",
                "~/Scripts/Grid.js",
                "~/Scripts/GridItem.js"
            ));
        }
    }
}