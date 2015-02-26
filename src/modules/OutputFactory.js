var EXPORTED_SYMBOLS = ['OutputFactory']
Components.utils.import('resource://claws/NvdaOutput.js')

/**
 * Factory design pattern is used to generate output text functions for DomWalker
 *
 * @param {Object} stringBundles -> contains all the stringBudles for all the output modes   
 */
function OutputFactory(stringBundles){
        /** 
         * Generates an object with 3 text functions for selected output mode
         *
         * @returns {textProvider} An object with getText, getClosingText and getIntputText functions
         */
        this.createTextProvider = function(mode){
                var textProvider = {}    
                switch (mode) {
                    case 'NVDA':                       
                        var nvdaOutput = new NvdaOutput(stringBundles.nvdaStringBundle)
                        
                        textProvider.getText = nvdaOutput.getNvdaText
                        textProvider.getClosingText = nvdaOutput.getClosingNvdaText
                        textProvider.getInputText = nvdaOutput.getInputNvdaText
                        
                        break
                }
                return textProvider
        }
}