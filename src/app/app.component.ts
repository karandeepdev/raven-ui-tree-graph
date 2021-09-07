import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { zoom } from 'd3';

import panzoom from 'panzoom';

// start of the data
var data = {
	"name": "Foxtrot",
	"children": [
		{
			"name": "Jiggle",
			"children": [
				{
					"name": "Alpha",
					"value": 100
				},
				{
					"name": "Beta",
					"value": 300
				},
				{
					"name": "Charlie",
					"children":[
                        {
                            "name":"Foxtrot"
                        }
                    ]
				}
			]
		},
		{
			"name": "Delta",
			"value": 200
		}
	]
}

var margin = { top: 20, right: 120, bottom: 20, left: 120 },
  width = 960 - margin.right - margin.left,
  height = 500 - margin.top - margin.bottom;

var treeLayout = d3.tree().size([width, height]);

var root = d3.hierarchy(data);

treeLayout(root);
const rectWidth = 100;
const rectHeight = 50;




// const workspace=  document.getElementsByClassName (".workspace")[0] as HTMLElement;
// let zoom = 1;
// document.addEventListener("wheel", function (e) {
     
//   if (e.deltaY > 0) {
//     workspace.style.transform = `scale(${(zoom += 0.2)})`;
//   } else  {
//     workspace.style.transform = `scale(${(zoom -= 0.2)})`;
//   }
// });



// const element = panzoom(document.getElementById('#g4')!)


// start of the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit() {
  }
  ngAfterViewInit() {
   
    // var svg = d3.select("body")
    // .append("svg")
    // .attr("width", "100%")
    // .attr("height", "100%")
    // .call(d3.behavior.zoom().on("zoom", function () {
    //   svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
    // }))
    // .append("g")


    d3.select('svg').call(zoom)



    const test = d3.select('svg g.nodes')
    .selectAll('rect.node')
    .data(root.descendants())
    .join('rect')
    .classed('node', true)
      .attr('x', function(d:any) { return d.x-rectWidth/2; })
      .attr('y', function(d:any) { return d.y-rectHeight/2; })
      .attr('width',rectWidth)
      .attr('height',rectHeight)
    
   
      console.log(test,"helooooooooooooooooo")


  //  names 
  const name= d3.select('svg g.name').selectAll('text.node').data(root.descendants()).join("text")
      .attr('x', function(d:any) { return d.x-rectWidth/4; })
      .attr('y', function(d:any) { return d.y-rectHeight/100; })
      .attr("dy", "")
      .text(function(d) { return d.data.name; });
  
  console.log(name,"nameeeeeeeeeeeee")


  // Links
   const link =  d3.select('svg g.links')
    .selectAll('line.link')
    .data(root.links())
    .join('line')
    .classed('link', true)
    .attr('x1', function(d:any) {return d.source.x;})
    .attr('y1', function(d:any) {return d.source.y;})
    .attr('x2', function(d:any) {return d.target.x;})
    .attr('y2', function(d:any) {return d.target.y;});


  console.log(link,"linkssssssssssssssss")


  const nodessss = d3.select('svg g.nodes').selectAll('rect.node')

  const popup=(_nodessss: any)=>{

  }
  popup(1)
  console.log("nodessss",nodessss);
  
  }





 
}








