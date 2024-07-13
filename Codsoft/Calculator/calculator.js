function addNo(num){
				ans = document.getElementById('ans');
				ans.innerHTML += num;
			}
			function clearAns(){
				ans = document.getElementById('ans');
				ans.innerHTML = "";
			}
			function genOp(){
				ans = document.getElementById('ans');
				finalAns = eval(ans.innerHTML);
				ans.innerHTML = finalAns;
			}