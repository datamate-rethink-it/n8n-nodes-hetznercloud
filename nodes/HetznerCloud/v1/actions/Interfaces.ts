import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type HetznerCloudMap = {
	image: 'create' | 'list';
	server: 'list' | 'get' | 'metrics';
	primary_ip: 'list';
	floating_ip: 'list';
	firewall: 'list' | 'create' | 'remove';
	certificate: 'list';
	loadbalancer: 'list';
	network: 'list';
	ssh: 'list';
	volume: 'list';
};

export type HetznerCloud = AllEntities<HetznerCloudMap>;

export type HetznerCloudImage = Entity<HetznerCloudMap, 'image'>;
export type HetznerCloudServer = Entity<HetznerCloudMap, 'server'>;
export type HetznerCloudPrimaryIP = Entity<HetznerCloudMap, 'primary_ip'>;
export type HetznerCloudFloatingIP = Entity<HetznerCloudMap, 'floating_ip'>;
export type HetznerCloudFirewall = Entity<HetznerCloudMap, 'firewall'>;
export type HetznerCloudCertificate = Entity<HetznerCloudMap, 'certificate'>;
export type HetznerCloudLoadbalancer = Entity<HetznerCloudMap, 'loadbalancer'>;
export type HetznerCloudNetwork = Entity<HetznerCloudMap, 'network'>;
export type HetznerCloudssh = Entity<HetznerCloudMap, 'ssh'>;
export type HetznerCloudVolume = Entity<HetznerCloudMap, 'volume'>;

export type ImageProperties = PropertiesOf<HetznerCloudImage>;
export type ServerProperties = PropertiesOf<HetznerCloudServer>;
export type PrimaryIPProperties = PropertiesOf<HetznerCloudPrimaryIP>;
export type FloatingIPProperties = PropertiesOf<HetznerCloudFloatingIP>;
export type FirewallProperties = PropertiesOf<HetznerCloudFirewall>;
export type CertificateProperties = PropertiesOf<HetznerCloudCertificate>;
export type loadbalancerProperties = PropertiesOf<HetznerCloudLoadbalancer>;
export type networkProperties = PropertiesOf<HetznerCloudNetwork>;
export type sshProperties = PropertiesOf<HetznerCloudssh>;
export type volumeProperties = PropertiesOf<HetznerCloudVolume>;

export interface rules {
	rulesValues: {
		protocol: string;
		direction: string;
		port?: string;
		destination_ips?: string;
		source_ips?: string;
		description?: string;
	};
}
