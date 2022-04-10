import styled from 'styled-components';
import { LinkItem } from '../Footer/FooterStyles';

export const ImageContainer = styled.div`
  border: 2px solid white;
`;

export const SpotifyLogo = styled.svg`
  width: 30px;
  height: 30px;
`;

export const LinkItemSpotify = styled(LinkItem)`
  display: flex;
  gap: 10px;
  /* align-items: center; */
`;
