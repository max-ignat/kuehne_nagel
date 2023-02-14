import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  margin-top: 35px;
`;

export const InfoWrap = styled.div`
  margin-left: 35px;
  width: 500px;
`;

export const FilmPoster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  width: 280px;
  height: 400px;
  margin-left: 35px;
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: #25468e;
  margin-bottom: 20px;
`;

export const ReleaseDate = styled.p`
  font-weight: bold;
  color: #25468e;
  margin-bottom: 15px;
`;

export const UserScore = styled.p`
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #25468e;
`;

export const OverviewText = styled.p`
  margin-bottom: 15px;
`;

export const Genres = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #25468e;
`;

export const GenresList = styled.span`
  margin-right: 5px;
`;
