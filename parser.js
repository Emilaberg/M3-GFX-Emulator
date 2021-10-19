let input = "circle(0, 0, 12, 255)";

let functions = [
	{ name: 'putPixel', params: 3 },
  { name: 'line', params: 5 },
	{ name: 'circle', params: 4 },
	{ name: 'rectangle', params: 5 },
	{ name: 'text', params: 4 }
];

console.log(FormatInput(input));

function FormatInput(str)
{	
	let res = str.split(/[()]+/);
  
  let func = res[0];
  let expectedParams = functions.find(x => x.name === func).params;
  
  res.shift();
  res.pop();
  
  res = res[0].split(', ');
    
  let params = [];
  
  if(res.length === expectedParams)
  {
    for(let i = 0; i < res.length; i++)
    {
      params.push(res[i]);
    }
  }
  else
  {
  	return "Not enough params, expecting " + expectedParams + " params.";
  }
  
  return {
  	function: func,
    params: params,
  };
}
