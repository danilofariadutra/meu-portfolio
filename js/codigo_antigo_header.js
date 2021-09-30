function getValue(id) {
            actualPosition = id

            // Movimentação vindas do portfolio
            if (actualPosition == "portfolio") && lastPosition == null) {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition)
                document.getElementById("setBar").classList.add("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                
                             
                //document.getElementById("setBar").classList.remove("curriculoAnimation")
                //console.log("portfolio")                
                lastPosition = "portfolio"
            } else if (actualPosition == "home" && lastPosition == "portfolio") {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition) 
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.add("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "home"
            } else if (actualPosition == "curriculo" && lastPosition == "portfolio") {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition) 
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.add("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "curriculo"
                //lastPosition = "curriculo"
            }
            
            // Movimentações vindas da home
            if (actualPosition == "home" && lastPosition == null) {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition)
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.add("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "home"
            } else if (actualPosition == "portfolio" && lastPosition == "home") {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition)
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.add("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "portfolio"
            } else if (actualPosition == "curriculo" && lastPosition == "home") {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition) 
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.add("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "curriculo"
            }

            // Movimentações vindas do curriculo
            if (actualPosition == "curriculo" && lastPosition == null) {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition)
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.add("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "home"
            } else if (actualPosition == "portfolio" && lastPosition == "curriculo") {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition)
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.add("homeToPortfolio")
                document.getElementById("setBar").classList.remove("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "portfolio"
            } else if (actualPosition == "home" && lastPosition == "curriculo") {
                console.log("Posição Atual: " + actualPosition)
                console.log("Última Posição: " + lastPosition) 
                document.getElementById("setBar").classList.remove("portfolioInitial")
                document.getElementById("setBar").classList.remove("portfolioToHome")
                document.getElementById("setBar").classList.remove("portfolioToCurriculo")
                document.getElementById("setBar").classList.remove("homeInitial")
                document.getElementById("setBar").classList.remove("homeToPortfolio")
                document.getElementById("setBar").classList.add("homeToCurriculo")
                document.getElementById("setBar").classList.remove("curriculoInitial")
                document.getElementById("setBar").classList.remove("curriculoToPortfolio")
                document.getElementById("setBar").classList.remove("curriculoToCurriculo")
                lastPosition = "home"
            }      
    }