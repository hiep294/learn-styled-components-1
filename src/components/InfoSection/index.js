import React from "react";
import * as S from "./index.element";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  topLine,
  headLine,
  lightTextDesc,
  description,
  primary,
  buttonLabel,
  start,
  img,
  alt,
}) => {
  return (
    <S.Section lightBg={lightBg}>
      <Container>
        <S.Row imgStart={imgStart}>
          <S.Column>
            <S.TextWrapper>
              <S.TopLine lightTopLine={lightTopLine}>{topLine}</S.TopLine>
              <S.Heading lightText={lightText}>{headLine}</S.Heading>
              <S.Subtitle lightTextDesc={lightTextDesc}>
                {description}
              </S.Subtitle>
              <Link to="/sign-up">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </S.TextWrapper>
          </S.Column>
          <S.Column>
            <S.ImgWrapper start={start}>
              <S.Img src={img} alt={alt} />
            </S.ImgWrapper>
          </S.Column>
        </S.Row>
      </Container>
    </S.Section>
  );
};

export default InfoSection;
