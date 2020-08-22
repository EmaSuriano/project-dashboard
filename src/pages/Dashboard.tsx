import React from 'react';

import { Button } from 'grommet';
import { Notification } from '../components/Notification';
import Summary from '../components/Summary';
import { Configure } from 'grommet-icons';
import { Layout, Column } from '../components/Layout';
import useProjectsQuery from '../hooks/useProjectsQuery';
import Overview from '../components/Overview';
import HealthStatus from '../components/HealthStatus';

export const Dashboard = () => {
  const { loading, error, data } = useProjectsQuery();
  const { projects, settings } = data!;

  return (
    <Layout name="Dashboard" action={SettingsButton}>
      <Column side>
        <Summary
          projects={projects}
          threshold={settings.threshold}
          loading={loading}
        />
        {error && (
          <Notification
            title="Something happened"
            message="Super bad error :/"
            status="error"
          />
        )}
        {!loading && (
          <HealthStatus projects={projects} threshold={settings.threshold} />
        )}
      </Column>
      <Column>
        <Overview projects={projects} loading={loading} />
      </Column>
    </Layout>
  );
};

const SettingsButton = (
  <Button label="Settings" primary icon={<Configure />} href="/settings" />
);