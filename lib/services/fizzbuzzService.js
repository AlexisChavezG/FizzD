class FizzbuzzService{
    static applyValidationInExplorer = function(explorer){
        explorer.forEach(element => {
            if(element.score % 5 === 0 && element.score % 3 == 0){
                element.trick = "FIZZBUZZ";
            }
            else if(element.score % 3 === 0){
                element.trick = "FIZZ";
            } 
            else if(element.score % 5 === 0){
                element.trick = "BUZZ";
            }else{
                element.trick = element.score;
            }
        });

        return explorer;
    };
}
module.exports = FizzbuzzService;