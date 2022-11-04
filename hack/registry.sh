#!/bin/bash

REG_NAME='lm-reg'
REG_PORT='5001'
REG_ADDRESS='192.168.10.2'

edit_daemon() {
	sed -i "/runtimes/i\"insecure-registries\" : [\"$REG_ADDRESS:$REG_PORT\"]," /etc/docker/daemon.json
  systemctl restart docker.service
}

start_registry() {
	running="$(docker inspect -f '{{.State.Running}}' "${REG_NAME}" 2>/dev/null || true)"
	if [ "${running}" != 'true' ]; then
		docker run \
			-d --restart=always \
			-p "${REG_ADDRESS}:${REG_PORT}:5000" \
			--name "${REG_NAME}" \
			registry:2
		echo "registry deployed"
	else
		echo "registry already running"
	fi
}

edit_daemon
start_registry
