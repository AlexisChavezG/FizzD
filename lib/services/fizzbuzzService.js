class FizzbuzzService{
        static applyValidationInExplorer = function(explorer){
            if(explorer.score % 3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };
}
module.exports = FizzbuzzService