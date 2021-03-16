import { useAtom } from 'jotai';
import { useEffect } from 'preact/hooks';
import styled from 'styled-components';
import { appsConfig } from '__/data/apps/apps-config';
import { activeAppStore, activeAppZIndexStore, openAppsStore } from '__/stores/apps.store';
import { Window } from '../Window/Window';

export const WindowsArea = () => {
  const [openApps] = useAtom(openAppsStore);
  const [activeApp] = useAtom(activeAppStore);
  const [activeAppZIndex, setActiveAppZIndex] = useAtom(activeAppZIndexStore);

  // Update the active app Z Index here
  useEffect(() => {
    setActiveAppZIndex(activeAppZIndex + 2);
  }, [activeApp]);

  return (
    <Container>
      {Object.keys(appsConfig).map((appID) => (
        <Window
          shouldRender={openApps[appID] && appsConfig[appID].shouldOpenWindow}
          key={appID}
          appID={appID}
        />
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: block;
`;
