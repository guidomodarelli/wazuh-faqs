export const KibanaInfo = {
  name: "Kibana",
  description:
    "Window into the Elastic Stack. Specifically, it's a browser-based analytics and search dashboard for Elasticsearch.",
  documentationLink: "https://www.elastic.co/guide/en/kibana/7.16/index.html",
  icon: "",
  body: [
    {
      type: "table",
      data: {
        columns: [
          {
            id: "description",
            label: "Description",
          },
          {
            id: "value",
            label: "Value",
            copyable: true,
          },
        ],
        rows: [
          {
            description: "Installation folder",
            value: "/usr/share/kibana",
          },
          {
            description: "Configuration file (package)",
            value: "/etc/kibana/kibana.yml",
          },
          {
            description: "Configuration file (zip)",
            value: "<KIBANA_HOME>/config/kibana.yml",
          },
          {
            description: "Logs",
            value: "journalctl -u kibana",
          },
          {
            description: "Logs",
            value: "journalctl | grep kibana",
          },
          {
            description: "Port",
            value: "5601",
          },
          {
            description: "Service",
            value: "kibana",
          },
        ],
      },
    },
  ],
  commands: [
    {
      label: "Install plugin - URL",
      value: "bin/kibana-plugin install <URL>",
    },
    {
      label: "Install plugin - local file",
      value: "bin/kibana-plugin install <PATH/TO/LOCAL/FILE>",
    },
  ],
  debug: [
    {
      label: "Logs (journalctl) - get all logs",
      value: "journalctl -u kibana",
    },
    {
      label: "Logs (journalctl) - get logs filterring by errors or warnings",
      value: 'journalctl -u kibana | grep -i -E "err|warn"',
    },
  ],
}
