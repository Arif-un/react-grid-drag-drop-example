import React, {useState} from 'react'

function createTag(elm) {
    if (elm.tag === 'input') {
        return (
            <input className="" placeholder={elm.text} />
        )
    }
    else if (elm.tag === 'div') {
        return (
            <div>{elm.text}</div>
        )
    }
}

export default function Element() {
    const dat = {
        obj: [
            {
                tag: "div",
                text: "asfa"
            },
            {
                tag: "input",
                text: "asfa",
            }
        ]
    }

    const [data, setData] = useState(dat)

    const changeData = () => {
        let temp = data
        temp.obj[0].text = 'ssss'
        setData(temp)
        console.log(temp);
    }
    const drag = e => {
        e.dataTransfer.setData('text', 123)
        console.log(e.dataTransfer);
    }
    return (
        <div className="element" draggable="true" draggable onDragStart={drag}>
            {data.obj.map(elm => createTag(elm))}

            <button onClick={changeData}>ok</button>
        </div>
    )
}
