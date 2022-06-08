import React from "react";

import PieChart, {
  Series,
  Label,
  Size,
  Export,
  Legend,
  Font,
  Connector
} from "devextreme-react/pie-chart";

// import { areas } from "./Data";
const areas = [
  {
    country: "Russia",
    area: 12,
  },
  {
    country: "Canada",
    area: 7,
  },
  {
    country: "USA",
    area: 7,
  },
  {
    country: "China",
    area: 7,
  },
  {
    country: "Brazil",
    area: 6,
  },
  {
    country: "Australia",
    area: 5,
  },
  {
    country: "India",
    area: 2,
  },
  {
    country: "Others",
    area: 55,
  },
];
const dataSource = [{
  country: 'USA',
  medals: 110
}, {
  country: 'China',
  medals: 100
}, {
  country: 'Russia',
  medals: 72
}, {
  country: 'Britain',
  medals: 47
}, {
  country: 'Australia',
  medals: 46
}, {
  country: 'Germany',
  medals: 41
}, {
  country: 'France',
  medals: 40
}, {
  country: 'South Korea',
  medals: 31
}];
class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.ismobileactivated=window.innerWidth;
    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
  }
  
  render() {
    function customizeText(arg) {
      return `${arg.valueText} (${arg.percentText})`;
    }
    return (
      <div className="row mx-auto piechart mt-5">
        
        {/* <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
        title="Olympic Medals in 2008"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Export enabled={true} />
        <Series argumentField="country" valueField="medals">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
        {this.ismobileactivated<1266?
          <Size  width={300}/>
          :
          <Size  width={700}/>
}
      </PieChart> */}

        <PieChart
          id="pie"
          dataSource={areas}
          palette="Bright"
          // title="Area of Countries"
          onPointClick={this.pointClickHandler}
          onLegendClick={this.legendClickHandler}
        >
            <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
          <Series argumentField="country" valueField="area">
            <Label visible={true}>
              <Connector visible={true} width={1} />
            </Label>
          </Series>
{this.ismobileactivated<1266?
          <Size  width={300}/>
          :
          <Size  width={600}/>
}
          <Export enabled={false} />
        </PieChart>
      </div>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

export default Charts;
