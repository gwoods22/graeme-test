import React from "react"
import styled from "styled-components"

const StyledBlock = styled.div`
  .block-box {
    display: flex;
  }
  .left,
  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    p {
      padding: 80px;
      text-align: center;
    }
  }
  .left {
    background-image: url(${p => (p.pLeft ? p.img : "")});
    background-position: center left;
  }
  .right {
    background-image: url(${p => (!p.pLeft ? p.img : "")});
    background-position: center right;
  }
`

const Block = ({ pLeft, row }) => {
  return (
    <StyledBlock pLeft={pLeft} img={row.img}>
      <div className="block-box">
        <div className="left">{pLeft ? "" : <p>{row.text}</p>}</div>
        <div className="right">{pLeft ? <p>{row.text}</p> : ""}</div>
      </div>
    </StyledBlock>
  )
}

export default Block
